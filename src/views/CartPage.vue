<template>
  <section class="content">
    <h3 class="content__title">Delivery address</h3>
    <form class="content__form">
      <div class="dropdown">
        <button
          class="dropdown__button dropdown__button--rotate"
          @click.prevent="openDropdown"
        >
          SE1 6DR, 42 Newington Causeway
        </button>
        <ul class="dropdown__list" v-if="isDropdownOn">
          <li class="dropdown__list-item" data-value="phone">
            SE1 6DR, 42 Newington Causeway
          </li>
        </ul>
        <span class="dropdown__label">London</span>
      </div>
      <div class="content-form__input-group">
        <div class="content-form__input-text">
          <input
            type="text"
            name="flat"
            class="content-form__input content-form__flat"
            placeholder="Flat"
            v-model="flatValue"
            @focus="focusedFlat = true"
            @blur="focusedFlat = !flatValue ? false : true"
            :class="{ 'content-form__input-text--focus': focusedFlat }"
          />
          <span class="content-form__input-label" v-show="focusedFlat"
            >Flat</span
          >
        </div>
        <div class="content-form__input-text">
          <input
            type="text"
            name="floor"
            class="content-form__input content-form__floor"
            placeholder="Floor"
            v-model="floorValue"
            @focus="focusedFloor = true"
            @blur="focusedFloor = !floorValue ? false : true"
            :class="{ 'content-form__input-text--focus': focusedFloor }"
          />
          <span class="content-form__input-label" v-show="focusedFloor"
            >Floor</span
          >
        </div>
        <div class="content-form__input-text">
          <input
            type="text"
            name="block"
            class="content-form__input content-form__block"
            placeholder="Block"
            v-model="blockValue"
            @focus="focusedBlock = true"
            @blur="focusedBlock = !blockValue ? false : true"
            :class="{ 'content-form__input-text--focus': focusedBlock }"
          />
          <span class="content-form__input-label" v-show="focusedBlock"
            >Block</span
          >
        </div>
      </div>
    </form>
    <section class="cart-items">
      <h3 class="content__title">{{ products.length }} items</h3>
      <div class="cart-items__wrapper">
        <cartItem :item="item" v-for="item in products" :key="item.id" />
      </div>
    </section>
  </section>
</template>

<script>
import cartItem from '@/components/cartItem.vue';

export default {
  data: () => ({
    focusedFlat: false,
    focusedFloor: false,
    focusedBlock: false,
    isDropdownOn: false,

    flatValue: null,
    floorValue: null,
    blockValue: null,
  }),
  name: 'app',
  components: { cartItem },
  computed: {
    products() {
      return this.$store.state.cartProducts;
    },
  },
  methods: {
    openDropdown() {
      this.isDropdownOn = !this.isDropdownOn;
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/font.scss';
@import '@/assets/scss/main.scss';
</style>
