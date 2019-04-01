<template>
    <div>
        <p>商户管理页面</p>
        <p>{{ message }}</p>
        <p>{{ name }}</p>
        <p>
            <span>交易总数：{{ count }}，交易总额：{{ amount }} 元，平均交易额：{{ average }} 元 </span>
        </p>
        <p>
            <button @click="trade">交易</button>&nbsp;&nbsp;<button @click="tradeLater">延时一秒交易</button>
        </p>
    </div>
</template>

<script>
    export default {
        name: "Merchant",
        computed: {
            name() {
                return this.$store.state.name
            },
            count() {
                return this.$store.state.count
            },
            amount() {
                return this.$store.state.amount
            },
            average() {
                return this.$store.getters.average
            },
            message() {
                return this.$store.state.module.message
            }
        },
        methods: {
            trade() {
                this.$store.commit('increment')
            },
            tradeLater() {
                this.$store.dispatch('increment')
            }
        }
    }
</script>

<style scoped>

</style>
