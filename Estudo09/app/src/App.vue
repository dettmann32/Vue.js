<template>
  <TeSte variant="variant">qualquer coisa</TeSte>
  <router-view/>
</template>
<script>
import TeSte from './components/TeSte.vue';
 export default{

  components:{
    TeSte
  },
  data(){
   variant:'anything'
  },
  
}
</script>
<style>


</style>
