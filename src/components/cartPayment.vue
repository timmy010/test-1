<template>
  <div class="cart-payment">
    <input type="text" class="cart-payment__input" placeholder="GHYU907H" v-model="paymentValue" />
  </div>
</template>

<script>
export default {
  data: () => ({
    paymentValue: null,
  }),
};
</script>

<style lang="scss">
.cart-payment {
  position: relative;
  margin-bottom: 20px;
  .cart-payment__input {
    width: 100%;
    margin: 0;
    padding: 0;
    border: 0;
    border-radius: 8px;
    padding: 13px 17px;
  }
}
.cart-payment::after {
  content: "";
  position: absolute;
  display: block;
  top: 50%;
  transform: translateY(-50%);
  right: 9px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: #0eb44d;
  background-image: url("../assets/img/check-mark.svg");
  background-size: 14px 9px;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
