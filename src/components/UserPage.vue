// Main component of single user's page. Contains 
// personal and corporative information about user

<template>
  <Loader v-if="isFetching" />
  <div v-else class="userPage container my-4 px-4">
    <div class="row">
      <UserInfo :user="currentUser" />
      <CompanyInfo :company="currentUser.company" />
    </div>
    <div class="btn-wrapper m-4 d-flex justify-content-center">
      <router-link class="btn btn-primary" to="/svc-user-api">To main</router-link>
    </div>    
  </div>
</template>

<script>
import UserInfo from "@/components/UserInfo";
import CompanyInfo from "@/components/CompanyInfo";
import Loader from "@/components/Loader";
import { mapGetters, mapActions } from "vuex";

export default {
  props: {
    userId: String,
  },

  computed: mapGetters(["currentUser", "isFetching"]),

  methods: mapActions(["fetchById"]),

  components: {
    UserInfo,
    CompanyInfo,
    Loader,
  },

  async mounted() {
    this.fetchById(this.userId);
  },
};
</script>
  
<style scope>
.userPage {
  border: 1px solid grey;
  border-radius: 10px;
}
</style>