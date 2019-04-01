<template>
    <div id="app">
        <Netpay/>
        <p>
            <router-link to="/merchant">商户管理</router-link>&nbsp;&nbsp;
            <router-link to="/order">订单管理</router-link>
        </p>
        <hr />
        <router-view></router-view>
    </div>
</template>

<script>
    import Netpay from './components/Netpay.vue'

    export default {
        name: 'app',
        components: {
            Netpay
        },
        data() {
            return {
                targetSysNum: 10000
            }
        }
    }
</script>
