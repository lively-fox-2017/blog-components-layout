<template lang="html">
<div class="mdl-grid">
  <div class="mdl-cell mdl-cell--2-col">
    <div class="mdl-card">
      <div class="mdl-card__title">
        Recent News
      </div>
      <ul class="mdl-list">
        <li class="mdl-list__item" v-for="article in articles">
          <span class="mdl-list__item-primary-content">
          <i class="material-icons mdl-list__item-icon">description</i>
          <router-link :to="{ name: 'BlogDetail', params: {id:article._id} }">{{article.title}}</router-link>
          </span>
        </li>
      </ul>
    </div>
  </div>
  <div class="mdl-cell mdl-cell--10-col">
    <router-view :articles="articles"></router-view>
  </div>
</div>
</template>

<script>
export default {
  props: ['articles'],
  data: () => {
    return {

    }
  }
}
</script>

<style lang="css">
.demo-card-wide.mdl-card {
  width: 100%;
}
.demo-card-wide > .mdl-card__menu {
  color: #fff;
}
</style>
