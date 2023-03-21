<template>
    <article>
        <h1> {{ book.title }} </h1>
        <h2> {{ book.author }} </h2>
        <img :src="`/livros/${book.imageUrl}`" :alt="book.title" />
        <p>Already Read: {{ book.alreadyRead ? "✅" : "❌" }}</p>
        <button class="btn" @click="deleteBook(book.id)">Delete</button>
    </article>
</template>

<script>

export default {
    name: "Book",
    props: ["book"],
    methods: {
        deleteBook(id){
            this.$store.dispatch("deleteBook", this.book.id)
        }
    }
}
</script>
<style>
    
</style>