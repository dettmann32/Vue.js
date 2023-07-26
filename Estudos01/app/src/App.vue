<template>
   <TheHeader class="header" v-show="showHeader"></TheHeader>
    
<div v-show="nome">
  Nome: {{ name }}
  Sobrenome: {{ lastname }}

</div>
<div v-if="access == 'ADMIN'"> admin </div>
<div v-else-if="access == 'marketing'"> marketing </div>
<div v-else> user </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'


export default {
  name: 'App',
  components: {
   TheHeader
  },
  data(){
    return{
      showHeader: true,
      nome : true,
      name : 'Jon snow ',
      lastname: 'Snow',
      access: 'admin'.toUpperCase()
 
 } 
}
}
</script>

<style>

</style>
