// User info state
export default {
    actions: {
        // Fetch all users from API
        async fetchAll(ctx) {
            const res = await fetch("https://jsonplaceholder.typicode.com/users/");
            const users = await res.json();

            ctx.commit('updateUsers', users)
        },

        // Fetch one user from API by id
        async fetchById(ctx, id) {
            ctx.commit('updateFetchStatus', true)
            
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            const user = await res.json();

            ctx.commit('updateCurrent', user)
            ctx.commit('updateFetchStatus', false)
        }
    },

    mutations: {
        updateUsers(state, users) {
            state.users = users;
        },

        updateCurrent(state, current) {
            state.current = current;
        },

        updateFetchStatus(state, newStatus) {
            state.fetchStatus = newStatus;
        },
    },

    state: {
        users: [], //contains full users list
        current: {}, //contains current chosen user for UserPage component
        fetchStatus: null, //represents current user fetching status to lead Loader component 
    },

    getters: {
        allUsers(state) {
            return state.users
        },
        currentUser(state) {
            return state.current
        },
        isFetching(state) {
            return state.fetchStatus
        },
    }
}