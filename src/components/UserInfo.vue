<template>
  <div class="col-md-6">
    <img class="col-md-3" src="@/assets/user-icon.png" alt="User Avatar" />
    <h1>{{ user.username }}</h1>
    <h5><b>Full name:</b> {{ user.name }} </h5><br />
    <h5><b>Email:</b> {{ user.email }}</h5><br />
    <h5><b>Phone:</b> {{ user.phone }}</h5><br />
    <h5><b>Website:</b> {{ user.website }}</h5><br />
  </div>
</template>

<script>
export default {
  props: {
    user: Object,
  },
};
</script>

<style scope>
</style>