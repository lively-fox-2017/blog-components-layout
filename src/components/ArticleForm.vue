<template lang="html">
  <div>
    <form action="#" v-on:submit.prevent="doSubmit">
      <div class="mdl-grid">
        <div class="mdl-cell mdl-cell--12-col">
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" type="text" id="title" required v-model:value="article.title">
            <label class="mdl-textfield__label" for="title">Title</label>
          </div>
        </div>
        <div class="mdl-cell mdl-cell--12-col">
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" type="text" id="content" required v-model:value="article.content">
            <label class="mdl-textfield__label" for="content">Content</label>
          </div>
        </div>
        <div class="mdl-cell mdl-cell--12-col">
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" type="file" id="fileuploader">
          </div>
        </div>
        <div class="mdl-cell mdl-cell--12-col">
            <button type="submit" class="mdl-button mdl-button--raised mdl-button--colored">Submit</button>
            <button type="button" class="mdl-button mdl-button--raised mdl-button--colored" v-on:click="toggleEdit">Cancel</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ['article', 'isEdit'],
  methods: {
    doSubmit () {
      var data = new FormData()
      if (this.isEdit) {
        data.append('title', this.article.title)
        data.append('content', this.article.content)
        data.append('imageFile', document.getElementById('fileuploader').files[0])
        this.$http.put('/article/' + this.article._id, data)
          .then((res) => {
            this.$emit('editpost', res.data)
          })
          .catch((err) => {
            console.error(err)
          })
      } else {
        data = new FormData()
        data.append('title', this.article.title)
        data.append('content', this.article.content)
        data.append('author', localStorage.getItem('token'))
        data.append('imageFile', document.getElementById('fileuploader').files[0])
        this.$http.post('/article', data)
          .then((res) => {
            this.$emit('postbarunih', res.data)
          })
          .catch((err) => {
            console.error(err)
          })
      }
    },
    toggleEdit () {
      this.$emit('toggleEdit')
    }
  }
}
</script>

<style lang="css">
</style>
