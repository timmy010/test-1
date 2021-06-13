<template>
<div>
  <div class="header">
    <!-- TODO: Подставить в title название страницы из роутера -->
    <h2 class="title">Cart</h2>
    <button class="back-btn" @click.prevent="goBack"></button>
  </div>
  <div class="container">
    <router-view/>
  </div>
</div>
</template>

<script>

export default {
  methods: {
    goBack() {
      if (window.history.length > 1) {
        this.$router.go(-1);
      } else {
        this.$router.push('/');
      }
    },
  },
};
</script>
