// Single user's page view

<template>
  <div>
    <UserPage :userId="$route.params.userId"/>
  </div>
</template>

<script>
import UserPage from '@/components/UserPage'

export default {
    components: {
        UserPage,
    }
};
</script>