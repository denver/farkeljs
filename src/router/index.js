import Vue from 'vue';
import Router from 'vue-router';
import PlayFarkel from '@/components/PlayFarkel';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PlayFarkel',
      component: PlayFarkel,
    },
  ],
});
