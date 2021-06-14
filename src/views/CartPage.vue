<template>
  <div class="container">
    <div class="content">
      <h3 class="content__title">Delivery address</h3>
      <deliveryForm/>
      <section class="cart-items">
        <h3 class="content__title">{{ products.length }} items</h3>
        <div class="cart-items__wrapper">
          <cartItem :item="item" v-for="item in products" :key="item.id" />
        </div>
      </section>
    </div>
    <h3 class="content__title">Payment</h3>
    <cartPayment/>
    <cartSummary/>
    <cartEnd/>
  </div>
</template>

<script>
import deliveryForm from '@/components/deliveryForm.vue';
import cartItem from '@/components/cartItem.vue';
import cartPayment from '@/components/cartPayment.vue';
import cartSummary from '@/components/cartSummary.vue';
import cartEnd from '@/components/cartEnd.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'app',
  components: {
    cartItem,
    deliveryForm,
    cartPayment,
    cartSummary,
    cartEnd,
  },
  computed: {
    // TODO: Доделать вывод суммы
    ...mapGetters({
      totalPrice: 'cartTotalPrice',
    }),
    products() {
      return this.$store.state.cartProducts;
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/font.scss';
@import '@/assets/scss/main.scss';
</style>
