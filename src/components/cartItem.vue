<template>
  <div class="cart-items__item">
    <router-link
      tag="a"
      class="cart-item__details"
      :to="{name: 'product', params: {id: item.id, title: item.category}}"
    >
      Details
    </router-link>
    <img :src="require(`@/assets/img/${item.image}`)" :alt="item.title" class="cart-item__img">
    <div class="cart-item__about-item">
      <p
        class="cart-item__title"
        :class="{ 'cart-item__title--wrap': item.offer || item.oldPrice }"
      >{{ item.title }}</p>
      <span
        class="cart-item__offer"
        v-if="item.oldPrice"
      >Price has been changed:<strong>(£{{ item.oldPrice }})</strong></span>
      <span class="cart-item__offer" v-if="item.offer">Special offer:<strong>{{ item.offer }}</strong></span>
      <basePrices :item="item"/>
    </div>
    <baseCounter :amount.sync="amount"/>
  </div>
</template>

<script>
import baseCounter from '@/components/baseCounter.vue';
import basePrices from '@/components/basePrices.vue';

export default {
  props: {
    item: Object,
  },
  components: { baseCounter, basePrices },
  computed: {
    amount: {
      get() {
        return this.item.amount;
      },
      set(value) {
        this.$store.commit('updateCartProductAmount', { productId: this.item.id, amount: value });
      },
    },
  },
};
</script>

<style lang="scss">
.cart-items__item {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #C4C4C450;
  padding: 12px 0;
  position: relative;
}
.cart-item {
  display: block;
  width: 100%;
  font-size: 12px;
  &__img {
    width: 44px;
    object-fit: contain;
  }
  &__about-item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 54%;
  }
  &__title {
    margin: 0;
    padding: 0;
    padding-bottom: 5px;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &__title--wrap {
    white-space: nowrap;
  }
  &__offer {
    font-size: 8px;
    background-color: #FFEBBF;
    width: fit-content;
    padding: 0 5px;
    padding-bottom: 5px;
    margin: 5px 0;
    border-radius: 3px;
  }
  &__details {
    position: absolute;
    top: 10px;
    right: 0;
    color: #000;
    font-size: 10px;
    font-weight: 700;
    text-decoration: none;
  }
  &__details::after {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    content: "";
    width: 12px;
    height: 6px;
    background-image: url('../assets/img/arrow-details.svg');
    background-size: 12px 6px;
    background-position: center;
    background-repeat: no-repeat;
  }
}
// Переназначение стилей компонента basePrices

.base-prices {
  &__price-detail::before {
    position: absolute;
    content: ".";
    bottom: 25%;
    left: -5px;
  }
}
</style>
