import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const module = {
    state: {
        message: 'vuex module demo'
    }
}

export default new Vuex.Store({
    state: {
        name: '银联商务有限公司',
        count: 100,
        amount: 100000
    },
    getters: {
        average: state => {
            return (state.amount / state.count).toFixed(2)
        }
    },
    // mutations只能执行同步操作
    mutations: {
        increment (state) {
            state.count++
            state.amount += 800
        }
    },
    // action可以执行异步操作
    actions: {
        increment (context) {
            setTimeout(() => {
                context.commit('increment')
            }, 1000)
        }
    },
    modules: {
        module: module
    }
})
