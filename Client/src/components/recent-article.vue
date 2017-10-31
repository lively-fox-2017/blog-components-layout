<template>
  <div>
    <div class="list-group">
      <router-link class="list-group-item" v-for='(value, index) in allarticles' :to="'/articles/'+index" key="index">
          <h3 class="list-group-item-heading">{{ value.judul }}</h3>
          <p class="list-group-item-text">{{ value.deskripsi.substring(0, 100) }}.......</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default{
  props: ['allarticles']
}
</script>
