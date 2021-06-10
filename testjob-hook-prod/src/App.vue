<template>
<div>
  <div class="header">
    <h2 class="title">Cart</h2>
    <button class="back-btn"></button>
  </div>
  <div class="container">
    <router-view/>
  </div>
</div>
</template>

<script>

export default {

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
