<template>
<div>
  <div class="header">
    <h2 class="title">Cart</h2>
    <button class="back-btn"></button>
  </div>
  <div class="container">
    <div class="content">
      <h3 class="content__title">Delivery address</h3>
      <form class="content__form">
          <div class="dropdown">
              <button
                class="dropdown__button dropdown__button--rotate"
                @click="openDropdown"
              >SE1 6DR, 42 Newington Causeway</button>
              <ul class="dropdown__list" v-if="isDropdownOn">
                  <li class="dropdown__list-item" data-value="phone">SE1 6DR, 42 Newington Causeway</li>
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
                :class="{ 'content-form__input-text--focus':focusedFlat }"
              >
              <span class="content-form__input-label" v-show="focusedFlat">Flat</span>
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
              :class="{ 'content-form__input-text--focus':focusedFloor }"
            >
            <span class="content-form__input-label" v-show="focusedFloor">Floor</span>
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
              :class="{ 'content-form__input-text--focus':focusedBlock }"
            >
            <span class="content-form__input-label" v-show="focusedBlock">Block</span>
          </div>
        </div>
      </form>
      <!-- TODO: Сделать еще несколько товаров с разными вариациями вывода -->
      <section class="cart-items" v-for="item in products" :key="item.id">
        <h3 class="content__title">{{ products.length }} items</h3>
        <div class="cart-items__wrapper">
          <div class="cart-items__item">
            <a href="#" class="cart-item__details">Details</a>
            <img src="./assets/img/item.png" alt="" class="cart-item__img">
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
            <!-- TODO: Сделать Counter:
            Перенести baseCounter из курсача по Vue, страница Cart изменив стили
            С обязательным использованием Store -->
            <div class="item-counter cart-item__buttons">
              <button class="item-counter__add">Add</button>
              <button class="item-counter__decrement"></button>
              <span class="item-counter__counter">2</span>
              <button class="item-counter__increment"></button>
            </div>
          </div>
        </div>
      </section>
    </div>
    <!-- <router-view/> -->
  </div>
</div>
</template>

<script>
import products from './data/products';

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
  computed: {
    products() {
      return products;
    },
  },
  methods: {
    openDropdown(e) {
      e.preventDefault();
      this.isDropdownOn = !this.isDropdownOn;
    },
  },
};
</script>

<style lang="scss">
@import './assets/scss/font.scss';
@import './assets/scss/main.scss';

</style>
