<template>
  <div class="content product-about">
    <div class="product-about-prop">
      <ul class="product-about-prop__list">
        <li class="product-about-prop__list-item product-about-prop__icon1"></li>
        <li class="product-about-prop__list-item product-about-prop__icon2"></li>
        <li class="product-about-prop__list-item product-about-prop__icon3"></li>
      </ul>
      <span class="product-about-prop__more">+3</span>
    </div>
    <baseLike/>
    <div class="product-about__image-slider">
      <!-- productGallery работает на основе плагина vue-slide
      Заметил, что плагин вызывает ошибку вне используемого компонента.
      Кроме того, по идее, галерея изображений должна подгружаться с сервера.
      Но пока что не разобрался как правильно динамически подгружать изображения
      (использовать require c шаблонными строками, чтобы еще и линтер не ругался)

      По этим двум причинам плагин и соответственно этот компонент пока отключил. -->

      <!-- <productGallery :product="product" v-if="product.gallery"/> -->
      <img
        :src="require(`@/assets/img/${product.image}`)"
        :alt="product.title"
        class="product-about__image"
      >
    </div>
    <h2 class="product-about__title">{{ product.title }}</h2>
    <div class="product-about__price-and-counter">
      <basePrices :item="product"/>
      <baseCounter :amount.sync="amount"/>
    </div>
    <baseCategories/>
  </div>
</template>

<script>
import baseCounter from '@/components/baseCounter.vue';
import baseLike from '@/components/baseLike.vue';
import basePrices from '@/components/basePrices.vue';

export default {
  props: {
    product: Object,
  },
  components: {
    basePrices, baseCounter, baseLike,
  },
  computed: {
    amount: {
      get() {
        return this.product.amount;
      },
      set(value) {
        this.$store.commit('updateCartProductAmount', { productId: this.product.id, amount: value });
      },
    },
  },
};
</script>

<style lang="scss">
  @import '@/assets/scss/product.scss';
</style>
