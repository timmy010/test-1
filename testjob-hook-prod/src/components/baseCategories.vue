<template>
  <nav class="categories">
    <ul class="categories__list">
      <li class="categories__item">Nutrition</li>
      <li class="categories__item">Ingredients</li>
      <li class="categories__item">Other</li>
    </ul>
  </nav>
</template>

<script>
export default {

};
</script>

<style lang="scss">
  .categories {
    &__list {
      margin: 0;
      padding: 0;
      padding-top: 10px;
      list-style: none;
      display: flex;
      justify-content: space-between;
    }
    &__item {
      font-size: 14px;
      font-weight: 700;
      color: #FFB000;
    }
  }
</style>
