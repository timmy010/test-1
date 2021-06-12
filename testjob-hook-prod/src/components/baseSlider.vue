<template>
  <swiper class='swiper' :options='swiperOption'>
    <swiper-slide>
      <productSliderItem/>
    </swiper-slide>
    <div class='swiper-pagination' slot='pagination'></div>
  </swiper>
</template>

<script>
import productSliderItem from '@/components/productSliderItem.vue';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';

export default {
  name: 'swiper-example-carousel-mode',
  title: 'Auto slides per view / Carousel mode',
  components: {
    Swiper,
    SwiperSlide,
    productSliderItem,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 30,
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
// @import './base.scss';

.swiper-slide {
  width: 80%;
}
.swiper-slide:nth-child(2n) {
  width: 60%;
}
.swiper-slide:nth-child(3n) {
  width: 40%;
}
</style>
