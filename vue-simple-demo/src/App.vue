<template>
    <div id="app">
        <img alt="Netpay logo" src="./assets/logo.png">
        <Netpay headMsg="欢迎来到网付平台" targetSysName="微信" :targetSysNum="targetSysNum"/>
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
