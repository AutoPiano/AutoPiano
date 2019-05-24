// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
// })

// https://ssr.vuejs.org/zh/guide/hydration.html
// prerender
new Vue({
  router,
  render: h => h(App)
}).$mount('#app', true) 

