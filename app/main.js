import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

import { submissionComponent } from './submission.component.js';

console.log("🚀 ~ file: main2.js:8 ~ data ~ Seed.submissions", Seed.submissions)
createApp({
  data() {
    return {
      submissions: Seed.submissions,
    }
  },
  computed: {
    sortedSubmissions() {
      return this.submissions.sort((a, b) => b.votes - a.votes);
    }
  },
  components: {
    'submission-component': submissionComponent
  },
  methods: {
    changeOrder() {
      return this.submissions.sort((a, b) => a.votes - b.votes)
    }
  }
}).mount('#app');