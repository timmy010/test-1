<template>
  <span class="base-price-detail">1 pc / £{{ price }}</span>
</template>

<script>
export default {
  props: {
    price: Number,
  },
};
</script>

<style lang="scss">
.base-price-detail {
  position: relative;
  color: #878786;
}
</style>
