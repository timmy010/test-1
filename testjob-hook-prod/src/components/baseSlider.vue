<template>
  <swiper class='swiper' :options='swiperOption'>
    <swiper-slide v-for="item in products" :key="item.id">
      <productSliderItem :product="item"/>
    </swiper-slide>
  </swiper>
</template>

<script>
import productSliderItem from '@/components/productSliderItem.vue';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';

export default {
  name: 'swiper-example-carousel-mode',
  title: 'Auto slides per view / Carousel mode',
  props: {
    product: Object,
  },
  components: {
    Swiper,
    SwiperSlide,
    productSliderItem,
  },
  computed: {
    products() {
      return this.product.buyWithThis;
    },
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 8,
        freeMode: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
    };
  },
};
</script>

<style lang='scss' scoped>
.swiper-slide {
  width: 152px;
}
</style>
