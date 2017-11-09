<template>
  <div id='CreateArticleComponent'>
    <sui-grid-row style="padding: 5px 0px">
      <sui-grid-column :width="12">
        <sui-form>
          <sui-form-field>
            <label>Title</label>
            <input type="text" v-model="title" placeholder="Article Title" />
          </sui-form-field>
          <sui-form-field>
            <label>Content</label>
            <textarea v-model="content"></textarea>
          </sui-form-field>
          <sui-form-field>
            <label>Content</label>
            <input @change="onFileChange" type="file" />
          </sui-form-field>
          <sui-image v-if="image !== ''" :src="image" size="small" style="padding: 5px 0px" />
          <sui-button @click.native.prevent="createImage" type="submit">Submit</sui-button>
        </sui-form>
      </sui-grid-column>
    </sui-grid-row>
  </div>
</template>
<script>
import jwtdecode from 'jwt-decode'
export default {
  name: 'CreateArticleComponent',

  props: ['slug'],

  data: () => ({
    title: '',
    content: '',
    imageName: '',
    image: '',
    resultUpload: null,
    oldfile: ''
  }),

  methods: {
    onFileChange (e) {
      var files = e.target.files || e.dataTransfer.files

      if (!files.length) {
        return
      }
      this.resultUpload = files[0]
      var reader = new FileReader()

      reader.onload = (e) => {
        this.image = e.target.result
      }
      reader.readAsDataURL(this.resultUpload)
    },
    createImage () {
      const token = localStorage.getItem('token')
      const user = jwtdecode(token)
      let data = new FormData()
      data.append('title', this.title)
      data.append('content', this.content)
      data.append('image', this.resultUpload)
      data.append('author', user._id)
      data.append('oldfile', this.oldfile)
      this.$http.put(`/api/article/update_article/${this.slug}`, data)
        .then(function (res) {
          location.reload()
        })
        .catch(function (err) {
          console.log(err)
        })
    },
    getDetailArticle () {
      this.$http.get('/api/article/get_article/' + this.slug)
        .then(({data}) => {
          this.title = data[0].title
          this.content = data[0].content
          this.image = data[0].coverImage
          this.oldfile = data[0].coverImage
        })
        .catch((err) => {
          console.error(err)
        })
    }
  },

  created () {
    this.getDetailArticle()
  }
}
</script>
<style scoped>
</style>
