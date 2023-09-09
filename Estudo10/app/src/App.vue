<template>
  <NavBar ></NavBar>
  <router-view/>
  <FooTer class="absolute w-[98.6vw] "></FooTer>  
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

