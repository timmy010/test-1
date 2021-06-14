<template>
  <ul class="other__list">
      <li
        class="other__list-item"
        v-for="param in productParams"
        :key="param.title"
      >
        <span class="other__item-title">{{ param.title }}</span>
        <span class="other__item-value">{{ param.value }}</span>
      </li>
    </ul>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  computed: {
    productParams() {
      return this.product.params;
    },
  },
};
</script>

<style lang="scss">
.other {
  &__list {
    width: 100%;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  &__list-item {
    display: flex;
    justify-content: space-between;
    font-family: 'Open Sans';
    font-size: 12px;
    margin: 0;
    padding: 0;
    margin-bottom: 13px;
  }
  &__list-item:last-child {
    margin-bottom: 0;
  }
  &__list-item span {
    width: 50%;
    line-height: 16px;
  }
  &__item-title {
    color: #878786;
  }
  &__item-value {
    color: #333;
    text-align: right;
  }
}
</style>
