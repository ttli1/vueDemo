<template>
    <div>
        <button @click="gotoDetail">订单详情</button>
    </div>
</template>

<script>
    export default {
        name: "Order",
        methods: {
            gotoDetail () {
                console.log('当前路由：' + this.$route.path)
                this.$router.push('/orderDetail')
            }
        }
    }
</script>

<style scoped>

</style>
