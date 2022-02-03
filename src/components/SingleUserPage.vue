<template>
  <div>
      <h1>USER NUMBER {{userId}}!!!</h1>
      <UserInfo />
      <CompanyInfo />
  </div>
</template>

<script>
import UserInfo from '@/components/UserInfo'
import CompanyInfo from '@/components/CompanyInfo'
export default {
    props: {
        userId: Number,
    },

    components: {
        UserInfo,
        CompanyInfo,
    }
}
</script>

<style>

</style>