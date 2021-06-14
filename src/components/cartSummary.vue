<template>
  <div class="cart-summary content">
    <ul class="cart-summary__list">
      <li class="cart-summary__list-item">
        <span class="cart-summary__list-item-title">Order</span>
        <span class="cart-summary__list-item-value">£ 4</span>
      </li>
      <li class="cart-summary__list-item">
        <span class="cart-summary__list-item-title">Delivery</span>
        <span class="cart-summary__list-item-value">£ 0,4</span>
      </li>
      <li class="cart-summary__list-item">
        <span class="cart-summary__list-item-title">Promocode</span>
        <span class="cart-summary__list-item-value">- £ 0,4</span>
      </li>
    </ul>
    <div class="cart-summary__total">
      <span class="span cart-summary-total-title">Total:</span>
      <span class="span cart-summary-total-value">£ 4,4</span>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss">
  .cart-summary {
    &__list {
      list-style: none;
      margin: 0;
      margin-top: 18px;
      padding: 0;
      padding-bottom: 15px;
      border-bottom: 1px solid #F2F2F2;
    }
    &__list-item {
      display: flex;
      justify-content: space-between;
      font-size: 16px;
      margin-bottom: 5px;
    }
    &__list-item:last-child {
      margin-bottom: 0;
    }
    &__total {
      display: flex;
      justify-content: space-between;
      font-family: 'Mukta';
      font-size: 24px;
      font-weight: 700;
      padding-top: 5px;
    }
  }
</style>
