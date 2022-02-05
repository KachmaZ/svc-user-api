// Router file. Add new routes to extend application

import Vue from "vue"
import Router from "vue-router"
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [

        // Main page
        {
            path: "/",
            component: Home
        },

        // Single user's page
        {
            path: "/user/:userId",
            component: () => import("./views/Profile.vue"), //Lasy render.
        }
    ]
})