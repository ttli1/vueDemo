import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routers from './router/routers'
import store from './store/store'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
    routes: routers
})

new Vue({
    render: h => h(App),
    router: router,
    store: store
}).$mount('#app')
