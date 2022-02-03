export default {
    actions: {

    },

    state: {
        users: []
    },

    getters: {
        allUsers(state) {
            return state.users
        }
    }
}