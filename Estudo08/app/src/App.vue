<template>
  <div>
    <TheHeader pemail='Lucas@gmail.com' @mudar-texto="trocartexto"></TheHeader>
  
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue"
export default {
  components:{
    TheHeader,
  },
  date () {
      return {
       pemail : ['Lucas@gmail.com'],
      }
      
  },
  methods:{
  trocartexto(){
            this.eemail = 'LucasDettmann@gmail.com'
        }
      }

}
</script>

<style  scoped>

</style>