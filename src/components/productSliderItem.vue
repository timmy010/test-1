<template>
  <div class="content product-slider-item">
    <baseLike />
    <img :src="this.image" :alt="product.title" class="product-slider-item__image" />
    <h2 class="product-slider-item__title">{{ product.title }}</h2>
    <baseDetailPrice :price="product.price" />
    <div class="product-slider-item__price-and-counter">
      <div class="product-slider-item__prices">
        <basePrice :price="product.price" />
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
  data() {
    return {
      amountState: 0,
    };
  },
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
    image() {
      return require(`@/assets/img/${this.product.image}`); // eslint-disable-line
    },
    amount: {
      get() {
        return this.amountState;
      },
      set(value) {
        this.amountState = value;
      },
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/slider-item.scss";
</style>
