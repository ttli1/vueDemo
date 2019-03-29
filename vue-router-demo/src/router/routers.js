import Merchant from '../views/Merchant.vue'
import Order from '../views/Order.vue'
import MerchantDetail from '../views/MerchantDetail.vue'
import OrderDetail from '../views/OrderDetail'

export default [
    { path: '/merchant', component: Merchant },
    { path: '/order', component: Order },
    { path: '/merchantDetail', component: MerchantDetail },
    { path: '/orderDetail', component: OrderDetail }
]
