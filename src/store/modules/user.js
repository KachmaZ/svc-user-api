export default {
    actions: {
        async fetchAll(ctx) {
            const res = await fetch("https://jsonplaceholder.typicode.com/users/");
            const users = await res.json();

            ctx.commit('updateUsers', users)
        },

        async fetchById(ctx, id) {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            const users = await res.json();

            ctx.commit('updateCurrent', users)
        }
    },

    mutations: {
        updateUsers(state, users) {
            state.users = users;
        },

        updateCurrent(state, current) {
            state.current = current;
        }
    },

    state: {
        users: [],
        current: {},
    },

    getters: {
        allUsers(state) {
            return state.users
        },
        currentUser(state) {
            return state.current
        }
    }
}