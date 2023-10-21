<template>
  <div class="home">
   <button @click="a()"></button>
   
   <div>
    <div v-for="c in dataf" :key="c.id">{{c.user}}</div>
   
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {ref} from 'vue'
import {fetchAjax} from '../components/teste'

export default {
  name: 'HomeView',
  components: {
    
  },
  setup(){

   

    const data = ref(null)
    let dataf = ref({})

    async function ajax(){
      try{
      data.value = await fetchAjax()
        if(data.value != null){
          dataf.value = data.value
        }
      console.log(data.value)
    } catch {
        throw console.error();
      }
     
    }
    ajax()
   
    return{
     dataf
    }
  }
}
  

  

  

</script>
<style>


</style>