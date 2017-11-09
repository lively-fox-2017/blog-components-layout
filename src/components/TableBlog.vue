<template lang="html">
<div>
  <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
    <thead>
      <tr>
        <th>Title</th>
        <th>Content</th>
        <th>Image</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(article, index) in articles">
        <td>{{article.title}}</td>
        <td>{{article.content.substring(0,50)}}</td>
        <td><img :src="article.imageUrl" style="width:30%"/></td>
        <td><button v-on:click="doEdit(index)">Edit</button>|<button v-on:click="doDelete(article._id)">Delete</button></td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
export default {
  props: ['articles'],
  methods: {
    doEdit (index) {
      this.$emit('doEdit', this.articles[index])
    },
    doDelete (id) {
      this.$http.delete('/article/' + id).then((data) => {
        this.$emit('hapusPost', id)
      }).catch((err) => {
        console.error(err)
      })
    }
  }
}
</script>

<style lang="css">
</style>
