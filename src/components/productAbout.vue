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
    <baseLike />
    <div class="product-about__image-slider">
      <!-- productGallery работает на основе плагина vue-slide,
      который выбрал, т.к. визуально он лучше подходил к макету
      Заметил, что плагин вызывает ошибку вне используемого компонента.
      Кроме того, по идее, галерея изображений должна подгружаться с сервера.

      По этим двум причинам плагин и соответственно этот компонент пока отключил.

      Возможно, позже или адаптирую плагин или, что веротянее, выберу другой плагин
       -->

      <!-- <productGallery :product="product" v-if="product.gallery"/> -->
      <img :src="require(`@/assets/img/${product.image}`)" :alt="product.title" class="product-about__image" />
    </div>
    <h2 class="product-about__title">{{ product.title }}</h2>
    <div class="product-about__price-and-counter">
      <div class="product-about__prices">
        <div class="product-about__current-price">
          <basePrice :price="product.price" />
          <baseDetailPrice :price="product.price" />
        </div>
        <baseOldPrice :oldPrice="product.oldPrice" />
      </div>
      <baseCounter :amount.sync="amount" />
    </div>
  </div>
</template>

<script>
import baseCounter from "@/components/baseCounter.vue";
import baseLike from "@/components/baseLike.vue";

import basePrice from "@/components/basePrice.vue";
import baseDetailPrice from "@/components/baseDetailPrice.vue";
import baseOldPrice from "@/components/baseOldPrice.vue";

export default {
  props: {
    product: Object,
  },
  components: {
    baseCounter,
    baseLike,
    basePrice,
    baseDetailPrice,
    baseOldPrice,
  },
  computed: {
    amount: {
      get() {
        return this.product.amount;
      },
      set(value) {
        this.$store.commit("updateCartProductAmount", { productId: this.product.id, amount: value });
      },
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/product.scss";
</style>
