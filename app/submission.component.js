export const submissionComponent = {
  template: `
  <figure class="media-left">
    <img class="image is-64x64"
    v-bind:src="submission.submissionImage">
  </figure>
  <div class="media-content">
    <div class="content">
      <p>
        <strong>
          <a href="#" class="has-text-info">{{submission.title}}</a>
          <span class="tag is-small">#{{submission.id}}</span>
        </strong>
        <br>
          {{submission.description}}
        <br>
        <small class="is-size-7">
          Submitted by:
          <img class="image is-24x24"
            v-bind:src="submission.avatar">
        </small>
      </p>
    </div>
  </div>
  <div class="media-right">
    <!-- v-on.click-->
    <span class="icon is-small">
      <i class="fa fa-chevron-up" @click="upvote(submission.id)"></i>
      <strong class="has-text-info">{{submission.votes}}</strong>
      <i class="fa fa-chevron-down" @click="downvote(submission.id)"></i>
    </span>
  </div>
  `,
  props:[
    'submission', 'submissions'
  ],
  methods: {
    upvote(id) {
      this.submissions.map(e => {
        if ( e.id == id ) {
          e.votes++
        }
      })
    },
    downvote(id) {
      this.submissions.map(e => {
        if ( e.id == id ) {
          e.votes--
        }
      })
    }
  }
}