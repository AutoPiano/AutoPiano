import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    { path: '/', name: 'AutoPianoPC', component: function() { return import ('@/pages/AutoPianoPC')} },
    { path: '/links', name: 'FriendLinks', component: function() { return import ('@/pages/FriendLinks')} },
  ]
})
