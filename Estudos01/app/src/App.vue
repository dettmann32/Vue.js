<template>
   <div>
     <TheHeader class="header"></TheHeader>
     <TheMainContainer></TheMainContainer>
     
   </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheMainContainer from './components/TheMainContainer.vue'


export default {
  name: 'App',
  components: {
   TheHeader,TheMainContainer,
  },
  data(){
    return{

     }
 } 
}

</script>

<style>

</style>
