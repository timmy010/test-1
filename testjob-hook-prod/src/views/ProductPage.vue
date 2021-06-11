<template>
<div>
  <div class="content product-about">
    <div class="product-about-prop">
      <ul class="product-about-prop__list">
        <li class="product-about-prop__list-item product-about-prop__icon1"></li>
        <li class="product-about-prop__list-item product-about-prop__icon2"></li>
        <li class="product-about-prop__list-item product-about-prop__icon3"></li>
      </ul>
      <span class="product-about-prop__more">+3</span>
    </div>
    <img src="../assets/img/like.svg" alt="#" class="product-about__like">
    <div class="product-about__image-slider">
      <img :src="require(`@/assets/img/${product.image}`)" :alt="product.title" class="product-about__image">
    </div>
    <h2 class="product-about__title">{{ product.title }}</h2>
    <div class="product-about__price-and-counter">
      <basePrices :item="product"/>
      <baseCounter :amount.sync="amount"/>
    </div>
    <baseCategories/>
  </div>
  <h2 class="product__title">Buy with this product</h2>
</div>
</template>

<script>
import baseCounter from '@/components/baseCounter.vue';
import basePrices from '@/components/basePrices.vue';
import baseCategories from '@/components/baseCategories.vue';

export default {
  components: { basePrices, baseCounter, baseCategories },
  computed: {
    productId() {
      return +this.$route.params.id;
    },
    product() {
      const thisProduct = this.$store.state.cartProducts.find((product) => product.id === this.productId);
      return thisProduct;
    },
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
