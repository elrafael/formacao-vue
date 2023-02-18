<template>
  <div>
    <button @click="comentar()">Comentar</button>
    <h2>O comentarisita {{ nome }} {{ comentario }}</h2>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'


@Options({
  props: {
    nome: String
  }
})

export default class ComentaristaComponent extends Vue {
  comentario = ''
  nome!: string

  comentar() {
    this.comentario = 'comentou: Um comentário'
  }
}
</script>