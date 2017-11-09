<template lang="html">
  <dialog class="mdl-dialog" id="login">
    <div style="text-align:right">
      <button type="button" class="close">x</button>
    </div>
    <div v-if="loginDialog">
      <h4 class="mdl-dialog__title">Allow data collection?</h4>
      <div class="mdl-dialog__content">
        <p>
          Allowing us to collect data will let us get you the information you want faster.
        </p>
      </div>
      <div class="mdl-dialog__actions">
        <button type="button" class="mdl-button">Login</button>
        <button type="button" class="mdl-button" v-on:click="toggleDialog">Register</button>
      </div>
    </div>
    <div v-else>
      <h4 class="mdl-dialog__title">Register</h4>
      <div class="mdl-dialog__content">
        <p>
          Allowing us to collect data will let us get you the information you want faster.
        </p>
      </div>
      <div class="mdl-dialog__actions">
        <button type="button" class="mdl-button">Register</button>
        <button type="button" class="mdl-button" v-on:click="toggleDialog">Login</button>
      </div>
    </div>
  </dialog>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
