<template>
<div>
  <div class="header">
    <!-- TODO: Подставить в title название страницы из роутера -->
    <h2 class="title">Cart</h2>
    <!-- <router-link tag="button" class="back-btn" :to="{ name: 'cart' }"></router-link> -->
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

<style lang="scss">
  * {
    box-sizing: border-box;
  }
  body {
    max-width: 360px;
    background: #E5E5E5;
    font-family: 'Noto Sans';
  }
  button {
    background-color: unset;
    border: 0;
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: opacity 0.3s;
  }
  button:hover {
    opacity: 0.5;
  }
  .header {
    position: relative;
    width: 100%;
    height: 60px;
    top: 0;
    background: #FFB000;
    border-radius: 0px 0px 8px 8px;
  }
</style>
