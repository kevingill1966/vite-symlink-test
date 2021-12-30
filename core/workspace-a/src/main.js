import Vue from 'vue';
import App from './App.vue';

import {b} from "workspace-b";

b();

import {c} from "workspace-c";

c();

new Vue({
  render: (h) => h(App),
}).$mount('#app');
