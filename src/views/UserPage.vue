<template>
  <div>
    <h1>Current User:{{currentUser}}</h1>
    <router-link to="/">To all users</router-link>
    <!-- <SingleUserPage :userId="userId" /> -->
  </div>
</template>

<script>
// import SingleUserPage from '@/components/SingleUserPage'
import {mapGetters} from 'vuex'

export default {
    props: {
        userId: String,
    },

    computed: mapGetters(['currentUser']),

    components: {
        // SingleUserPage,
    }
};
</script>

<style>
</style>