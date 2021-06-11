<template>
<div class="base-prices__prices">
  <div class="base-prices__current-price">
    <span class="base-prices__price">£ {{ item.price }}</span>
    <span class="base-prices__price-detail">1 pc / £{{ item.price }}</span>
  </div>
  <span class="base-prices__price-old" v-if="item.oldPrice">£ {{ item.oldPrice }}</span>
</div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>

<style lang="scss">
.base-prices {
  &__prices {
    font-size: 12px;
    display: flex;
    flex-direction: column;
  }
  &__price {
    font-weight: 700;
    margin-right: 10px;
  }
  &__price-detail {
    position: relative;
    color: #878786;
  }
  &__current-price {
    display: flex;
  }
  &__price-old {
    text-decoration: line-through;
    color: #878786;
  }
}
</style>
