<template lang="html">
<div>
  <div class="mdl-grid">
    <div class="mdl-layout-spacer"></div>
    <div class="mdl-cell mdl-cell--10-col">
      <div class="mdl-card" id="table-card">
        <div class="mdl-card__title">
          <h2 class="mdl-card__title-text">Dashboard of Article Post</h2>
        </div>
        <div class="mdl-card__supporting-text">
          <TableBlog v-on:doEdit="populateForm" v-bind:articles="articles" v-on:hapusPost="deletePost"></TableBlog>
          <ArticleForm v-bind:article="article" v-bind:isEdit="isEdit" v-on:toggleEdit="toggleEdit" v-on:postbarunih="addNewArticle" v-on:editpost="editArticle"></ArticleForm>
        </div>
      </div>
    </div>
    <div class="mdl-layout-spacer"></div>
  </div>
</div>
</template>

<script>
import TableBlog from '@/components/TableBlog'
import ArticleForm from '@/components/ArticleForm'

export default {
  props: ['loggedInStatus'],
  data: () => {
    return {
      article: {},
      isEdit: false,
      articles: []
    }
  },
  components: {
    TableBlog,
    ArticleForm
  },
  methods: {
    checkAuth () {
      if (!this.loggedInStatus) {
        this.$router.push('/')
      } else {
        this.getAllArticle()
      }
    },
    addNewArticle (value) {
      this.articles.unshift(value)
    },
    editArticle (value) {
      var index = this.articles.findIndex((element) => {
        if (element._id === value._id) {
          return element
        }
      })
      this.articles[index] = value
    },
    deletePost (id) {
      var index = this.articles.findIndex((element) => {
        if (element._id === id) {
          return element
        }
      })
      this.articles.splice(index, 1)
    },
    populateForm (value) {
      this.article = value
      this.isEdit = true
    },
    toggleEdit () {
      this.article = {}
      this.isEdit = false
    },
    getAllArticle () {
      this.$http.get('/article/user/' + localStorage.getItem('token')).then((data) => {
        this.articles = data.data
      }).catch((err) => {
        console.error(err)
      })
    }
  },
  created: function () {
    this.checkAuth()
  },
  watch: {
    loggedInStatus (watched) {
      this.checkAuth()
    }
  }
}
</script>

<style lang="css">
#table-card {
  width: 100%;
}
</style>
