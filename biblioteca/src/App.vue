
<template id="app">
  <h1>A minha Biblioteca de JS</h1>
  <hr >
  <nav>
    <router-link to="/home">Livros</router-link>
    <router-link to="/favourites">Favoritos</router-link>
    <router-link to="/about">Sobre</router-link>
  </nav>

  
  <router-view></router-view>
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
