<template>
  <div class="grid grid-cols-4 text-center">
    <div v-for=" (c,index) in caixa" v-bind:key="index" class="box1">
      <p>{{c}}</p>
    </div>
    <div v-for="c in caixa2" v-bind:key="c.id" class="box1">
      {{c.language}}
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

    
  },
  data(){
    return{
      caixa : ['java','python','css'],
      caixa2 : [
        {id:1, language:'php'},
        {id:2, language:'html'},
        {id:3, language:'kotlin'},
        {id:4, language:'kotlin'},
        {id:5, language:'kotlin'}
  
      ]
    }
  }
}
</script>

<style>

</style>
