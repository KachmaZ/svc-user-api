import Vue from "vue"
import Router from "vue-router"
import Profile from '@/views/Profile'

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
            component: Profile,
        }
    ]
})