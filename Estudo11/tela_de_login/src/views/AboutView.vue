<template>
  <div class="flex justify-center">
    <div class="container">
      <form class="form" @submit.prevent="created()" name="form">

        <label for="name">Nome</label>
        <input v-model="user" type="text" />

        <label for="email">Email</label>
        <input type="email" name="email" class="border-gray-600 border " v-model="email">


        <label for="password" >password</label>
        <input type="password" name="password" v-model="password">

        <div class="btn">
          <button type="submit">
            Create
          </button>
        </div>

        <p>{{message}}</p>


      </form>
    </div>
  </div>
</template>
<script>

import axios from "axios"
export default {
  name:'AboutView',

  data(){
    return{
      
      user:null,
      email:null,
      password:null,
      message:''
     

    }
  },
  methods:{
    async created(){
      
      
      
     const ajax = await axios.post('http://localhost:3333/user/user',{
      user:this.user,
      email:this.email,
      password:this.password
     })
      
      this.message = ajax.data.message
    


     this.user = null
     this.email = null
     this.password = null

     


     }}



     


     
    }
  

</script>

<style scoped>


  

</style>