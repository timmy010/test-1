<template>
  <span class="base-price-old" v-if="oldPrice">£ {{ oldPrice }}</span>
</template>

<script>
export default {
  props: {
    oldPrice: Number,
  },
};
</script>

<style lang="scss">
.base-price-old {
  text-decoration: line-through;
  color: #878786;
}
</style>
