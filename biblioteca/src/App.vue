
<template id="app">
  <h1>A minha Biblioteca de JS</h1>
  <hr >
  <BookDashboard />
</template>

<script>
import BookDashboard from './components/BookDashboard.vue'

export default{
  name: "App",
  components: {
    BookDashboard,
  }
}

</script>

<style scoped>

</style>
