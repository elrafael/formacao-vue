<template>
  <section>
    <input type="text" v-model="value" :placeholder="placeholder" @keyup.enter="monitorEnterKey">
  </section>
</template>
<script>
  export default {
    name: 'InputNote',
    data() {
      return {
        value: ''
      }
    },
    props: [
      'placeholder'
    ],
    emits: ['add-note'],
    methods: {
      monitorEnterKey() {
        this.emitter.emit('add-note', {
          note: this.value,
          timestamp: new Date().toLocaleDateString()
        })
        // this.$emit('add-note', {
        //   note: this.value,
        //   timestamp: new Date().toLocaleDateString()
        // });
        this.value = ''
      }
    }
  }
</script>
<style scoped>
input {
  width: 90%;
  border: 1px solid #ccc;
  margin: 20px;
  padding: 10px;
}
</style>