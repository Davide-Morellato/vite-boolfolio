
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
  <div class="pt-10">
    <h2>{{ message }}</h2>
    <Main />
  </div>
</template>

<style>

</style>