<template>
  <productAbout :product="product" class="product-slider-item"/>
</template>

<script>
import productAbout from '@/components/productAbout.vue';

export default {
  props: {
    product: Object,
  },
  components: {
    productAbout,
  },
};
</script>

<style lang="scss">
  .product-slider-item.product-about {
    & .product-about-prop {
      display: none;
    }
    & .product-about__image {
      width: 100px;
    }
    & .product-about__title {
      font-size: 13px;
    }
    & .base-prices__price-detail {
      font-size: 12px;
    }
    & .base-prices__price {
      font-size: 16px;
    }
    & .item-counter__add {
      font-size: 14px;
    }
    & .item-counter__increment, & .item-counter__increment {
      width: 24px;
      height: 24px;
      background-size: 24px 24px;
    }
    & .product-about__price-and-counter {
      flex-direction: column;
    }
  }
</style>
