<script>

import Main from './components/Main.vue';

  export default{
    components: {
      Main,
    },
    data(){
      return{
        message: 'Lista Progetti:'
      }
    }
  }
</script>

<template>
  <div>
    <h2>{{ message }}</h2>
    <Main />
  </div>
</template>

<style lang="scss">
@use './style/general.scss';
</style>
