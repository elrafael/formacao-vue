<template>
  <h1>Note APP</h1>
  <section class="columns">
    <article class="notes">
      <h1>Notes</h1>
      <div v-for="note in notes">
        {{ note }}
      </div>
    </article>

    <article class="timestamp">
      <h1>Timestamp: </h1>
      <div v-for="ts in timestamps">
        {{ ts }}
      </div>
    </article>
  </section>

  <InputNote
    :placeholder="placeholder"
    @add-note="addNote"
  />
</template>

<script>
import InputNote from './components/InputNote.vue';

export default {
  name: 'App',
  data() {
    return {
      notes: [],
      timestamps: [],
      placeholder: 'Enter note'
    }
  },
  components: {
    InputNote
  },
  methods: {
    addNote(e) {
      this.notes.push(e.note)
      this.timestamps.push(e.timestamp)
    }
  }
}
</script>

<style scoped>
section.columns {
  display: flex;
  width: 600px;
}
section.columns > * {
  flex: 1
}
</style>
