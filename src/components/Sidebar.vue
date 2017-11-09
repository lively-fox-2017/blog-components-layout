<template>
  <div class="Sidebar col-md-3">
    <div class="list-group">
      <a v-for="data in Navcon" href="#" class="list-group-item" @click="summon(data)"><router-link :to="'/'+data._id">{{data.judul}}</router-link>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: ['Navcon'],
  data () {
    return {

    }
  },
  methods: {
    summon (data) {
      this.$emit('summoned', data)
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-group-item {
  border-radius: 25px;
}
</style>
