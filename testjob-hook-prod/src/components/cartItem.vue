<template>
  <div class="cart-items__item">
    <a href="#" class="cart-item__details">Details</a>
    <img :src="require(`@/assets/img/${item.image}`)" :alt="item.title" class="cart-item__img">
    <div class="cart-item__about-item">
      <p class="cart-item__title">{{ item.title }}</p>
      <span
        class="cart-item__offer"
        v-if="item.oldPrice"
      >Price has been changed:<strong>(£{{ item.oldPrice }})</strong></span>
      <span class="cart-item__offer" v-if="item.offer">Special offer:<strong>{{ item.offer }}</strong></span>
      <div class="cart-item__prices">
        <div class="cart-item__current-price">
          <span class="cart-item__price">£ {{ item.price }}</span>
          <span class="cart-item__price-detail">1 pc / £{{ item.price }}</span>
        </div>
        <span class="cart-item__price-old" v-if="item.oldPrice">£ {{ item.oldPrice }}</span>
      </div>
    </div>
    <baseCounter :amount.sync="amount"/>
  </div>
</template>

<script>
import baseCounter from '@/components/baseCounter.vue';

export default {
  props: {
    item: Object,
  },
  components: { baseCounter },
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
}
.cart-item {
  display: block;
  width: 100%;
  font-size: 12px;
  &__img {
    object-fit: cover;
    flex: 0 1 0;
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
    font-size: 12px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  &__offer {
    font-size: 8px;
    background-color: #FFEBBF;
    width: fit-content;
    padding: 2px 5px;
    margin: 5px 0;
    border-radius: 3px;
  }
  &__prices {
    font-size: 12px;
  }
  &__price {
    font-weight: 700;
    margin-right: 10px;
  }
  &__price-detail {
    position: relative;
    color: #878786;
  }
  &__price-detail::before {
    position: absolute;
    content: ".";
    top: 0;
    left: -5px;
  }
  &__current-price {
    display: block;
  }
  &__price-old {
    text-decoration: line-through;
    color: #878786;
  }
  &__details {
    display: none;
  }
}
</style>
