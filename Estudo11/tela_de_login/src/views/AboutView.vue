<template>
  <div class="flex justify-center">
    <div class="container">
      <form class="form" @submit.prevent="created">

        <label for="name">Nome</label>
        <input v-model="form.user" type="text" />

        <label for="email">Email</label>
        <input type="email" name="email" class="border-gray-600 border " v-model="form.email">


        <label for="password" >password</label>
        <input type="password" name="password" v-model="form.password">

        <div class="btn">
          <button type="submit">
            Create
          </button>
        </div>


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
      form:{
      user:null,
      email:null,
      password:null,
      }

    }
  },
  methods:{
    async created(){
     const data = await axios.post('http://localhost:3333/user/user',this.form)
     console.log(data.data)
      
    }
  }
}
</script>

<style scoped>


  

</style>