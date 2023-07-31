<template>
  <div>
    <ReutilizaçãoDeComponentes></ReutilizaçãoDeComponentes>
    <TheHeader></TheHeader>
    <ReutilizaçãoDeComponentes style="color: blue;"></ReutilizaçãoDeComponentes>
    <ReutilizaçãoDeComponentes></ReutilizaçãoDeComponentes>
  </div>
</template>

<script>
import ReutilizaçãoDeComponentes from './components/Reutilização/ReutilizaçãoDeComponentes.vue'
import TheHeader from './components/TheHeader.vue';
  export default{
    name : 'App',
   components:{
      TheHeader,ReutilizaçãoDeComponentes,
    }
  
  }
    
  

</script>