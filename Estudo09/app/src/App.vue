<template>
  <TeSte prop="variant">qualquer coisa</TeSte>
  <BaseAlert v-if="ShowAlert" @close="onclose()"></BaseAlert>
  <router-link to="/PreSunto">presunto</router-link>
  <router-view/>
</template>
<script>
import TeSte from './components/TeSte.vue';
import BaseAlert from './components/BaseAlert.vue';
 export default{

  components:{
    TeSte, BaseAlert
  },
  data(){
    ShowAlert:true
  },
  methods:{
    onclose(){
      this.show = !this.show
    }
  }
  
}
</script>
<style>


</style>
