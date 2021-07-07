<template>
  <div class="cart-end">
    <div class="cart-end__delivery-time">
      <span class="cart-end__title">Delivery:</span>
      <span class="cart-end__delivery-value">25-30 min</span>
    </div>
    <div class="cart-end__total-price">
      <span class="cart-end__title">Total:</span>
      <span class="cart-end__total-price-value">£ 150.99</span>
    </div>
    <button class="cart-end__checkout-button">Checkout</button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.cart-end {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #333333;
  border-radius: 8px 8px 0 0;
  padding: 8px 10px 20px 44px;
  margin-top: 79px;
  &__delivery-time,
  &__total-price {
    display: flex;
    flex-direction: column;
    color: #fff;
  }
  &__title {
    font-size: 10px;
    margin-bottom: 10px;
  }
  &__delivery-value {
    font-size: 14px;
    font-weight: 700;
  }
  &__total-price-value {
    font-size: 16px;
    font-weight: 700;
  }
  &__checkout-button {
    color: #333333;
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    margin: 0;
    padding: 0;
    padding: 10px 26px;
    background-color: #ffbc41;
    border-radius: 8px;
  }
  &__checkout-button::hover {
    opacity: 0.5;
  }
}
.cart-end::before {
  content: "";
  position: absolute;
  top: 16px;
  left: 10px;
  width: 25px;
  height: 24px;
  background-color: #ffb000;
  border-radius: 50%;
  background-image: url("../assets/img/speed.svg");
  background-size: 15px 15px;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
