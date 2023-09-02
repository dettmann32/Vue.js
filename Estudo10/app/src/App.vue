<template>
  <NavBar ></NavBar>
  <router-view/>
  <FooTer></FooTer>  
</template>

<script>
import NavBar from './components/NavBar.vue'
import FooTer from './components/FooTer.vue'
  export default{
  
  components:{
    NavBar, FooTer
  },
  
  
}

</script>
<style >

</style>
