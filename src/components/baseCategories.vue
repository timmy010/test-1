<template>
  <nav class="categories">
    <ul class="categories__list">
      <li class="categories__item"><a href="#" class="categories__item-link">Nutrition</a></li>
      <li class="categories__item"><a href="#" class="categories__item-link">Ingredients</a></li>
      <li class="categories__item"><a href="#" class="categories__item-link">Other</a></li>
    </ul>
  </nav>
</template>

<script>
export default {};
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
    color: #ffb000;
  }
  &__item-link {
    text-decoration: none;
    color: inherit;
  }
}
</style>
