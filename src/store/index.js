import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user"

//Main vuex file. Connect modules to extend

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user,
    }
})