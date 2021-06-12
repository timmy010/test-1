<template>
<div>
  <div class="content">
    <productAbout :product="product"/>
    <baseCategories/>
  </div>
  <h2 class="product__title">Buy with this product</h2>
  <baseSlider :product="product"/>
</div>
</template>

<script>
import productAbout from '@/components/productAbout.vue';
import baseCategories from '@/components/baseCategories.vue';
import baseSlider from '@/components/baseSlider.vue';

export default {
  components: {
    productAbout, baseCategories, baseSlider,
  },
  computed: {
    productId() {
      return +this.$route.params.id;
    },
    product() {
      const thisProduct = this.$store.state.cartProducts.find((product) => product.id === this.productId);
      return thisProduct;
    },
  },
};
</script>

<style lang="scss">
  @import '@/assets/scss/product.scss';
</style>
