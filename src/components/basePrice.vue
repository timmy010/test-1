<template>
  <span class="base-price">£ {{ price }}</span>
</template>

<script>
export default {
  props: {
    price: Number,
  },
};
</script>

<style lang="scss">
.base-price {
  font-weight: 700;
  margin-right: 10px;
}
</style>
