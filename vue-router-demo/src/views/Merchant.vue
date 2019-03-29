<template>
    <div>
        <button @click="gotoDetail">商户详情</button>
    </div>
</template>

<script>
    export default {
        name: "Merchant",
        methods: {
            gotoDetail () {
                console.log('当前路由：' + this.$route.path)
                this.$router.push('/merchantDetail')
            }
        }
    }
</script>

<style scoped>

</style>
