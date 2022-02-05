<template>
  <div class="container my-4">
    <div class="card-deck row gy-4 align-items-center">
      <UserCard v-for="user in allUsers" :key="user.id" :user="user" />
    </div>
  </div>
</template>

<script>
import UserCard from "@/components/UserCard";
import { mapGetters, mapActions } from "vuex";

export default {
  computed: mapGetters(["allUsers"]),
  methods: mapActions(["fetchAll"]),

  async mounted() {
    this.fetchAll();
  },

  components: {
    UserCard,
  },
};
</script>

<style scope>
</style>