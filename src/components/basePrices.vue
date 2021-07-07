<template>
  <div class="base-prices__prices">
    <div class="base-prices__current-price">
      <basePrice :price="item.price" />
      <baseDetailPrice :price="item.price" />
    </div>
    <baseOldPrice :oldPrice="item.oldPrice" />
  </div>
</template>

<script>
import basePrice from "@/components/basePrice.vue";
import baseDetailPrice from "@/components/baseDetailPrice.vue";
import baseOldPrice from "@/components/baseOldPrice.vue";

export default {
  props: {
    item: Object,
  },
  components: {
    basePrice,
    baseDetailPrice,
    baseOldPrice,
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
  &__current-price {
    display: flex;
  }
}
</style>
