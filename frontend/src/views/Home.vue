<template>
  <div class="home">
    <Header />
    <ConnexionForm />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import ConnexionForm from '@/components/ConnexionForm'

export default {
  name: 'Home',
  components: {
    Header,
    ConnexionForm
  }
}
</script>

<style scoped>
  
</style>
