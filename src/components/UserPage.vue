<template>
  <div class="container my-4">
    <div class="row">
      <UserInfo :user="currentUser" />
      <CompanyInfo :company="currentUser.company" />
    </div>
    <div class="btn-wrapper m-4 d-flex justify-content-center">
      <router-link class="btn btn-primary" to="/">To main</router-link>
    </div>    
  </div>
</template>

<script>
import UserInfo from "@/components/UserInfo";
import CompanyInfo from "@/components/CompanyInfo";
import { mapGetters, mapActions } from "vuex";

export default {
  props: {
    userId: String,
  },

  computed: mapGetters(["currentUser"]),

  methods: mapActions(["fetchById"]),

  components: {
    UserInfo,
    CompanyInfo,
  },

  async mounted() {
    this.fetchById(this.userId);
  },

  unmounted() {
    console.log("!!!");
  },
};
</script>
  
<style scope>
.container {
  border: 1px solid grey;
  border-radius: 10px;
}
</style>