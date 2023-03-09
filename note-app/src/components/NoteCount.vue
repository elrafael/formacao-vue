<template>
  <div class="note-count">
    <h2>Note Count: {{ noteCount }} </h2>
  </div>
</template>

<script>
  export default {
    name: 'NoteCount',
    data() {
      return {
        noteCount: 0,
      }
    },
    created() {
      this.emitter.on('add-note', e => this.noteCount++)
    }
  }
</script>
<style scoped>
div.note-count {
  padding: 10px;
  border: 1px solid #CCC;
  border-radius: 10px;
}
</style>