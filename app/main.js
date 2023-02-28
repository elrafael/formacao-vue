import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

import { submissionComponent } from './submission.component.js';

console.log("🚀 ~ file: main2.js:8 ~ data ~ Seed.submissions", Seed.submissions)
createApp({
  data() {
    return {
      submissions: Seed.submissions,
      descendent: true,
    }
  },
  computed: {
    sortedSubmissions() {
      return this.submissions.sort((a, b) => this.descendent ? b.votes - a.votes : a.votes - b.votes);
    }
  },
  components: {
    'submission-component': submissionComponent
  },
  methods: {
    changeOrder() {
      this.descendent = !this.descendent
    }
  }
}).mount('#app');