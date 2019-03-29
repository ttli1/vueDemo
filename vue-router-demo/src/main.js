import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routers from './router/routers'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
    routes: routers
})

new Vue({
    render: h => h(App),
    router: router
}).$mount('#app')
