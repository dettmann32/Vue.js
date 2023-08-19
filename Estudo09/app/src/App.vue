<template>
  <TeSte prop="variant">qualquer coisa</TeSte>
  <BaseAlert v-if="$store.state.ShowAlert"></BaseAlert>
  <router-link to="/PreSunto">presunto</router-link>
 {{ $store.state.user.name }}

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
    return{
     
    }
  },
  methods:{
    onclose(){
      this.show = !this.show
    }
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
