<template>
    <div>
        <p>订单管理页面</p>
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
    import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

    export default {
        name: "Order",
        computed: mapState({
            name: state => state.name,
            count: state => state.count,
            amount: state => state.amount,
            message: state => state.module.message,
            ...mapGetters([
                'average'
            ])
        }),
        methods: {
            trade() {
                this.increment()
            },
            tradeLater() {
                this.incrementAction()
            },
            ...mapMutations([
                'increment'
            ]),
            ...mapActions({
                incrementAction: 'increment'
            })
        }
    }
</script>

<style scoped>

</style>
