import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import Navigation from './Navigation.vue'

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#vue-nav',
    render: r => r(Navigation)
  }
});

export const bootstrap = [
  vueLifecycles.bootstrap,
];

export const mount = [
  vueLifecycles.mount,
];

export const unmount = [
  vueLifecycles.unmount,
];
