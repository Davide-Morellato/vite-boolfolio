
<script>

import Main from '../Main.vue';

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
  <div class="mt-30">
    <h2>{{ message }}</h2>
    <Main />
  </div>
</template>

<style>

</style>