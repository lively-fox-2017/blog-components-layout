<template lang="html">
  <div>
    <div class="col-sm-12 col-md-6" >
      <h2>Recent Article</h2>
      <div class="list-group">
        <router-link class="list-group-item col-md-12" v-for='(value, index) in Articles' :to="'/articles/'+value._id" :key="index">
          <div class="recentImg col-md-2 col-sm-12">
            <img v-bind:src="value.imgUrl" v-bind:alt="value.imgName" width="100%">
          </div>
          <div class="recentDescrption">
            <h3 class="list-group-item-heading">{{ value.judul }}</h3>
            <p class="list-group-item-text">{{ value.deskripsi.substring(0, 100) }}.......</p>
          </div>
        </router-link>
      </div>
    </div>

    <div class="col-sm-12 col-md-6" >
      <h2>Articles Posted By You</h2>
      <div class="list-group">
        <div class="" v-for='(value, index) in MyArticles' >
          <router-link class="list-group-item col-md-11" :to="'/articles/'+value._id" :key="index">
            <div class="recentImg col-md-2 col-sm-12">
              <img v-bind:src="value.imgUrl" v-bind:alt="value.imgName" width="100%">
            </div>
            <div class="recentDescrption col-md-10 col-sm-12">
              <h3 class="list-group-item-heading">{{ value.judul }}</h3>
              <p class="list-group-item-text">{{ value.deskripsi.substring(0, 100) }}.......</p>
            </div>
          </router-link>
          <div class="col-md-1 text-left setPadding">
            <a href="#" class="btn btn-success" @click="editPost(value._id, value.judul, value.deskripsi, value.imgUrl)">Edit</a>
            <a href="#" class="btn btn-danger" @click="deletePost(value._id)">Delete</a>
          </div>
        </div>
      </div>
    </div>

    <!-- <PostArticle /> -->
    <div class="col-sm-12 col-md-6 col-md-offset-3">
      <h2>Post Article</h2>
      <form class="formPost" @submit.prevent="postArticle">
        <fieldset>
          <div class="form-group">
            <div class="input-group">
              <span class="input-group-addon">Title</span>
              <input class="form-control title" type="text" v-model="postForm.judul" required>
            </div>
          </div>
          <div class="form-group">
            <div class="input-group">
              <span class="input-group-addon">Img Url</span>
              <input class="form-control title" type="text" placeholder="Sementara ini via Url dulu" v-model="postForm.imgUrl" required>
            </div>
          </div>
          <div class="form-group">
            <div class="input-group">
              <span class="input-group-addon">Content</span>
              <textarea class="form-control title" rows="3" id="textArea" v-model="postForm.deskripsi" required></textarea>
            </div>
          </div>
          <div class="form-group">
           <div class="text-right">
             <button type="reset" class="btn btn-default" @click="resetId">Cancel</button>
             <button type="submit" class="btn btn-orange" v-if="!articleId">Submit</button>
             <button type="submit" class="btn btn-success" v-else>Edit</button>
           </div>
         </div>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ['Articles', 'MyArticles'],
  data () {
    return {
      postForm: {
        user: this.$store.state.user.userId,
        judul: '',
        deskripsi: '',
        imgUrl: '',
        imgName: 'Articles Photo'
      },
      articleId: '',
      edit: false
    }
  },
  methods: {
    resetId () {
      this.postForm.judul = ''
      this.postForm.deskripsi = ''
      this.postForm.imgUrl = ''
      this.articleId = ''
    },

    postArticle () {
      // console.log(this.postForm)
      if (this.articleId) {
        let token = localStorage.getItem('token')

        this.$axios.put(`/articles/update/${this.articleId}`, this.postForm, {
          headers: {
            'token': token
          }
        }).then((response) => {
          this.$swal(
            'Edited!',
            'Article has been edited.',
            'success'
          )

          this.postForm.articleId = this.articleId

          // this.$store.commit('editArticle', this.postForm)
          this.$store.dispatch('getAllArticles')
          this.$store.dispatch('getMyArticles', this.postForm.user)

          this.resetId()
        }).catch((reason) => {
          console.log('ERROR,', reason)
        })
      } else {
        this.$axios.post('/articles/insert', this.postForm).then((response) => {
          this.$swal(
            'Post Success!',
            '',
            'success'
          )

          this.$store.commit('pushArticle', response.data.data)

          this.resetId()
        }).catch((reason) => {
          console.log('ERROR,', reason)
        })
      }
    },

    editPost (id, judul, deskripsi, img) {
      this.postForm.judul = judul
      this.postForm.deskripsi = deskripsi
      this.postForm.imgUrl = img
      this.articleId = id
    },

    deletePost (articleId) {
      let token = localStorage.getItem('token')

      this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Delete'
      }).then(() => {
        this.$axios.delete(`/articles/delete/${articleId}`, {
          headers: {
            'token': token
          }
        })
        .then((response) => {
          // console.log(articleId)
          this.$store.commit('spliceArticle', articleId)
          this.$swal(
            'Deleted!',
            'Article has been deleted.',
            'success'
          )
        }).catch((reason) => {
          console.log('ERROR,', reason)
        })
      })
    }
  }
}
</script>

<style scoped>
  .input-group-addon{
    background-color: orange;
    color: white;
    font-weight: bold;
  }

  .title{
    border: 1px solid orange;
  }

  .btn-orange{
    background-color: orange;
    color: white;
  }
</style>
