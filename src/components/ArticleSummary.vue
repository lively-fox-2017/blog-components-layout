<template lang="html">
  <sui-card-group :itemsPerRow="3">
    <sui-card>
      <sui-image :src="image" />
      <sui-card-content>
        <sui-card-header>Kristy</sui-card-header>
        <sui-card-meta>Joined in 2013</sui-card-meta>
        <sui-card-description>Kristy is an art director living in New York.</sui-card-description>
      </sui-card-content>
      <sui-card-content extra>
        <router-link :to="{ name: 'detail', params: {} }"></router-link>
        <sui-button basic>
          <sui-icon name="angle right" />
          Read More
        </sui-button>
      </sui-card-content>
    </sui-card>
  </sui-card-group>
</template>

<script>
export default {
  name: 'ArticleSummary',
  props: ['articles'],
  computed: {
    image () {
      return require('../assets/logo.png')
    }
  }
}
</script>

<style lang="css">
</style>
