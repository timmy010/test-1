<template>
<div class="container">
  <div class="content">
    <productAbout :product="product"/>
    <baseCategories/>
  </div>
  <h2 class="product__title">Buy with this product</h2>
  <baseSlider :product="product" class="slider"/>
  <div class="content">
    <div class="nutrition">
      <h2 class="nutrition__title">Nutrition</h2>
      <article class="nutrition__description">
        <p class="nutrition__description-text">
        Lorem ipsum dolor sit amet, <b>consectetur adipiscing</b> elit. Ultrices at egestas tempus duis
        egestas semper dolor <b>morbi purus</b>. Lorem ipsum dolor sit amet, <b>consectetur adipiscing</b> elit.
        Ultrices at egestas tempus duis egestas semper dolor <b>morbi purus.</b></p>
      <ul class="nutrition__description-list">
        <li class="nutrition__description-list-item">Lorem ipsum dolor sit amet</li>
        <li class="nutrition__description-list-itemlist-item">Consectetur adipiscing elit</li>
        <li class="nutrition__description-list-itemlist-item">Ultrices at egestas tempus</li>
        <li class="nutrition__description-list-itemlist-item">Duis egestas semper dolor morbi purus.</li>
      </ul>
      </article>
      <!-- TODO: Сделать плавную анимацию -->
      <!-- TODO: Сделать анимацию стрелки -->
      <productNutritions class="nutrition__items" v-show="!itemsIsHide"/>
      <button class="nutrition__button" @click.prevent='hideNutrition'>{{ nutritionBtnText }}</button>
    </div>
    <div class="ingridients">
      <h2 class="ingridients__title">Ingridients</h2>
      <p class="ingridients__text">
        Lorem ipsum dolor sit amet, <b>consectetur adipiscing</b> elit.
        Ultrices at egestas tempus duis egestas semper dolor <b>morbi purus</b>.
      </p>
    </div>
    <div class="other">
      <h2 class="other__title">Other</h2>
      <productParams :product="product"/>
    </div>
  </div>
</div>
</template>

<script>
import productAbout from '@/components/productAbout.vue';
import baseCategories from '@/components/baseCategories.vue';
import baseSlider from '@/components/baseSlider.vue';
import productNutritions from '@/components/productNutritions.vue';
import productParams from '@/components/productParams.vue';

export default {
  data() {
    return {
      itemsIsHide: false,
    };
  },
  components: {
    productAbout,
    baseCategories,
    baseSlider,
    productNutritions,
    productParams,
  },
  computed: {
    productId() {
      return +this.$route.params.id;
    },
    product() {
      const thisProduct = this.$store.state.cartProducts.find((product) => product.id === this.productId);
      return thisProduct;
    },
    nutritionBtnText() {
      const text = this.itemsIsHide ? 'Show' : 'Hide';
      return text;
    },
  },
  methods: {
    hideNutrition() {
      this.itemsIsHide = !this.itemsIsHide;
    },
  },
};
</script>

<style lang="scss">
  @import '@/assets/scss/product.scss';
</style>
