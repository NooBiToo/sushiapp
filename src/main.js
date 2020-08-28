import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/store'
import './assets/styles/main.sass'

Vue.config.productionTip = false

Vue.directive('visible', function(el, binding) {
	el.style.visibility = !binding.value ? 'hidden' : 'visible';
});

Vue.component("modal", {
  template: "#modal-template",
});

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
