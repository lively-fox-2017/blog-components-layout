<template>
  <div class="Navcon">
    <Sidebar :Navcon='artikel' @summoned="dataLemparan"/>
    <Content :Navcon='artikelLemparan'/>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import Content from '@/components/Content'
import axios from 'axios'
export default {
  name: 'Navcon',
  components: {
    Sidebar,
    Content
  },
  data () {
    return {
      artikelLemparan: null,
      artikel: []
    }
  },
  methods: {
    dapatkanArtikel () {
      axios.get('http://localhost:3000/artikel').then((response) => {
        this.artikel = response.data
      }, (error) => {
        console.log(error)
      })
    },
    dataLemparan (isi) {
      console.log(isi)
      this.artikelLemparan = isi
    }

  },
  // mounted: function (Navcon) {
  //   console.log(Navcon)
  //   this.fetchArticles = Navcon
  // },
  created () {
    this.dapatkanArtikel()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#border{
  border-radius: 500px;
}
</style>
