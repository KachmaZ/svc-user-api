<template>
  <div class="col-md-6 d-flex flex-column justify-content-around">
    <h1 class="company-head">Company</h1>
    <h2>{{company.name}}</h2>
    <h4 class="mb-2 text-muted">{{company.catchPhrase}}</h4>
    <h4>BS: {{company.bs}}</h4>
  </div>
</template>

<script>
export default {
  props:{
    company: Object,
  }
}
</script>

<style scope>
  .company-head {
    text-align: center;
  }
</style>