import Vue from 'vue';
import PlayFarkel from '@/components/PlayFarkel';

describe('PlayFarkel.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(PlayFarkel);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.farkel h1').textContent)
      .toEqual('Farkel: A Game of Guts and Luck');
  });
});
