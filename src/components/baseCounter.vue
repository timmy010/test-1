<template>
  <div class="item-counter cart-item__buttons">
    <button class="item-counter__add" v-if="!this.baseAmount">Add</button>
    <button
      class="item-counter__decrement"
      type="button"
      aria-label="Убрать один товар"
      @click.prevent="baseAmount--"
      v-if="this.baseAmount"
    ></button>

    <span class="item-counter__counter" v-if="this.baseAmount">{{ baseAmount }}</span>

    <button
      class="item-counter__increment"
      type="button"
      aria-label="Добавить один товар"
      @click.prevent="baseAmount++"
    ></button>
  </div>
</template>

<script>
export default {
  props: {
    amount: Number,
  },
  computed: {
    baseAmount: {
      get() {
        return this.amount;
      },
      set(value) {
        if (value >= 0) {
          this.$emit("update:amount", value);
        }
      },
    },
  },
};
</script>

<style lang="scss">
.item-counter {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  align-self: flex-end;
  height: fit-content;
  flex: 0 0 28%;
  &__counter {
    margin: 0 5px;
  }
  &__add {
    color: #ffbc41;
    font-size: 14px;
    font-weight: 700;
    margin-right: 6px;
    cursor: pointer;
  }
  &__decrement,
  &__increment {
    width: 28px;
    height: 28px;
    background-size: 28px 28px;
    background-position: center;
    cursor: pointer;
    transition: opacity 0.3s;
  }
  &__decrement:hover,
  &__increment:hover,
  &__add:hover {
    opacity: 0.5;
  }
  &__decrement {
    border-radius: 50%;
    background-color: #f2f2f2;
    background-image: url("../assets/img/inner-decrement.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 12px 14px;
  }
  &__increment {
    background-image: url("../assets/img/increment.svg");
  }
}
</style>
