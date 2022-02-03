<template>
  <div>
      <UserCard v-for="user in allUsers" :key="user.id" :user="user"/>
  </div>
</template>

<script>
import UserCard from '@/components/UserCard'
import {mapGetters, mapActions} from 'vuex'

export default {
    computed: mapGetters(['allUsers']),
    methods: mapActions(['fetchUsers']),

    async mounted() {
        this.fetchUsers()
    },

    components: {
        UserCard
    }
}
</script>

<style scope>
div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
}
</style>