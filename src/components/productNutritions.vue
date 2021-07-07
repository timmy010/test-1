<template>
  <div class="nutritions-items">
    <div class="nutritions-items__item" v-for="item in nutritions" :key="item.id">
      <span class="nutritions-items__title">{{ item.value }}</span>
      <span class="nutritions-items__subscribe">{{ item.label }}</span>
      <span class="nutritions-items__labels">
        <span class="nutritions-items__label">{{ item.ri }}% RI</span>
        <span class="nutritions-items__label nutritions-items__label--low" v-if="item.ri < 10">Low</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  computed: {
    nutritions() {
      return this.product.nutritions;
    },
  },
};
</script>

<style lang="scss">
.nutritions-items {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 5px;

  &__item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &__title {
    font-size: 18px;
    font-weight: 700;
    color: #333;
    margin-bottom: 2px;
  }
  &__subscribe {
    font-size: 12px;
    color: #999999;
    margin-bottom: 2px;
  }
  &__labels {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    font-size: 10px;
    text-align: center;
    background-color: #ebebeb;
  }
  &__label {
    text-align: center;
    color: #707070;
    font-weight: 700;
    padding: 2px;
  }
  &__label--low {
    background-color: #e7f7ed;
    color: #0eb44d;
  }
}
</style>
