export default {
    actions: {
        async fetchUsers(ctx) {
            const res = await fetch("https://jsonplaceholder.typicode.com/users/");
            const users = await res.json();

            ctx.commit('updateUsers', users)
        },
        async fetchById(ctx, userId) {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
            const user = await res.json();

            ctx.commit('updateCurrentUser', user)
        }
    },

    mutations: {
        updateUsers(state, users) {
            state.users = users;
        },

        updateCurrentUser(state, newCurrent){
            state.currentUser = newCurrent;
        }
    },

    state: {
        users: [],
        currentUser: {},
    },

    getters: {
        allUsers(state) {
            return state.users
        },
        currentUser(state){
            return state.currentUser
        }
    }
}