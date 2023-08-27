<template>
  <TeSte prop="variant">qualquer coisa</TeSte>
  <BaseAlert v-if="$store.state.ShowAlert"></BaseAlert>
  <router-link to="/PreSunto">presunto</router-link>
 {{ $store.state.user.name }}

  <BaseAlert2></BaseAlert2>

  <router-view/>

</template>
<script>
import TeSte from './components/TeSte.vue';
import BaseAlert from './components/BaseAlert.vue';
import BaseAlert2 from './components/BaseAlert2.vue';
 export default{

  components:{
    TeSte, BaseAlert, BaseAlert2
  },
  data(){
    return{
     
    }
  },
  methods:{
   
  },
  created(){
    const newUser =  {
      name:'pedro',
      age: '19',
      job: 'repositor',
      id:1
    }
    this.$store.commit('ShowUser', newUser)
  }
  
}
</script>
<style>


</style>
