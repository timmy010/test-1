import Vue from 'vue';
import VueRouter from 'vue-router';
import CartPage from '@/views/CartPage.vue';
import ProductPage from '@/views/ProductPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    name: 'cart',
    component: CartPage,
    path: '/',
  },
  {
    name: 'product',
    component: ProductPage,
    path: '/product/:id',
  },
];

const router = new VueRouter({
  routes,
});

export default router;
