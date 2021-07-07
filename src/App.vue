<template>
  <div>
    <div class="header _anim-items">
      <h2 class="title">{{ pageTitle }}</h2>
      <button class="back-btn" @click.prevent="goBack"></button>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    pageTitle() {
      const title = this.$route.name === "cart" ? "Cart" : this.$route.params.title;
      return title;
    },
  },
  mounted() {
    this.startAnimations();
  },
  methods: {
    startAnimations() {
      function offset(el) {
        const rect = el.getBoundingClientRect();
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
      }
      function animOnScroll() {
        const animItem = document.querySelector("._anim-items");

        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 4;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;

        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if (
          window.pageYOffset > animItemOffset - animItemPoint &&
          window.pageYOffset < animItemOffset + animItemHeight
        ) {
          animItem.classList.add("header--active");
          animItem.classList.remove("header--disactive");
        }

        if (window.pageYOffset === 0) {
          animItem.classList.remove("header--active");
          animItem.classList.add("header--disactive");
        }
      }
      window.addEventListener("scroll", animOnScroll);
    },
    goBack() {
      if (window.history.length > 1) {
        this.$router.go(-1);
      } else {
        this.$router.push("/");
      }
    },
  },
};
</script>
