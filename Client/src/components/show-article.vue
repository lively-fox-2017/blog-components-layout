<template>
  <div>
    <div class="">
      <h2>{{ allarticles[index].judul }}</h2>
      <img v-bind:src="allarticles[index].imgUrl" width='90%' v-bind:alt="allarticles[index].imgName">
      <p>
        {{ allarticles[index].deskripsi }}
      </p>
    </div>
  </div>
</template>

<script>
export default{
  props: ['allarticles', 'index']
}
</script>
