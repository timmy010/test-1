<template>
  <div>
    <slide :data="slide" />
  </div>
</template>

<script>
import slide from "@wyhaya/vue-slide";

export default {
  data() {
    return {
      slide: [
        require("../assets/img/item.png"), // eslint-disable-line
        require("../assets/img/item.png"), // eslint-disable-line
        require("../assets/img/item.png"), // eslint-disable-line
      ],
    };
  },
  props: {
    product: Object,
  },
  components: { slide },
};
</script>

<style lang="scss">
.vue-slide .spot > div {
  border-color: #000;
}
.vue-slide .spot > div.cur {
  background-color: #000;
}
</style>
