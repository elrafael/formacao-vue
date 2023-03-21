<template>
    <section class="grid">
        <Book v-for="book in books" :key="book.id" :book="book" />
    </section>
</template>

<script>
import Book from './Book.vue'

export default {
    name: "BookList",
    components: {
        Book,
    },
    created() {
        this.$store.dispatch('getProductItems');
    },
    computed: {
        books() {
            return this.$store.getters.getBooks;
        }
    }
}
</script>
<style>
    
</style>