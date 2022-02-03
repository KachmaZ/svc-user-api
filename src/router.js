import Vue from "vue"
import Router from "vue-router"
import UserPage from '@/views/UserPage'

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            component: () => import("./views/Home.vue")
        },
        {
            path: "/user/:userId",
            component: UserPage,
            props: true,
        }
    ]
})