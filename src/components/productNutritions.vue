<template>
<!-- TODO: Сделать подгрузку данных из файла -->
  <div class="nutritions-items">
    <div class="nutritions-items__item">
      <span class="nutritions-items__title">28</span>
      <span class="nutritions-items__subscribe">Kkal.</span>
      <span class="nutritions-items__labels">
        <span class="nutritions-items__label">4% RI</span>
        <span class="nutritions-items__label nutritions-items__label--low">Low</span>
      </span>
    </div>
    <div class="nutritions-items__item">
      <span class="nutritions-items__title">1.3 g</span>
      <span class="nutritions-items__subscribe">Proteins</span>
      <span class="nutritions-items__labels">
        <span class="nutritions-items__label">10% RI</span>
      </span>
    </div>
    <div class="nutritions-items__item">
      <span class="nutritions-items__title">0 g</span>
      <span class="nutritions-items__subscribe">Fats</span>
      <span class="nutritions-items__labels">
        <span class="nutritions-items__label">12% RI</span>
      </span>
    </div>
    <div class="nutritions-items__item">
      <span class="nutritions-items__title">28</span>
      <span class="nutritions-items__subscribe">Сarbs</span>
      <span class="nutritions-items__labels">
        <span class="nutritions-items__label">10% RI</span>
      </span>
    </div>
    <div class="nutritions-items__item">
      <span class="nutritions-items__title">6,4 mg</span>
      <span class="nutritions-items__subscribe">Niacin</span>
      <span class="nutritions-items__labels">
        <span class="nutritions-items__label">40% RI</span>
      </span>
    </div>
    <div class="nutritions-items__item">
      <span class="nutritions-items__title">0,8 g</span>
      <span class="nutritions-items__subscribe">Vitamin B6</span>
      <span class="nutritions-items__labels">
        <span class="nutritions-items__label">57% RI</span>
      </span>
    </div>
    <div class="nutritions-items__item">
      <span class="nutritions-items__title">0 g</span>
      <span class="nutritions-items__subscribe">Fats</span>
      <span class="nutritions-items__labels">
        <span class="nutritions-items__label">12% RI</span>
      </span>
    </div>
    <div class="nutritions-items__item">
      <span class="nutritions-items__title">28</span>
      <span class="nutritions-items__subscribe">Сarbs</span>
      <span class="nutritions-items__labels">
        <span class="nutritions-items__label">10% RI</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
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
      background-color: #EBEBEB;
    }
    &__label {
      width: 50%;
      text-align: center;
      color: #707070;
      font-weight: 700;
      padding: 2px;
    }
    &__label--low {
      background-color: #E7F7ED;
      color: #0EB44D;
    }
 }
</style>
