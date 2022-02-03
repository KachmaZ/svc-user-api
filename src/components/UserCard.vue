<template>
  <div>
    <router-link :to="userLink" @click="fetchById(user.id)">{{ user.username }}: {{userLink}}</router-link> 
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  props: {
    user: Object,
  },

  computed: {
    ...mapActions(['fetchById']),
    userLink(){
      return `/user/${this.user.id}`
    },
  }
};
</script>

<style scoped>
div {
    width: 200px;
    height: 350px;
    border: 1px solid gray;
}
</style>