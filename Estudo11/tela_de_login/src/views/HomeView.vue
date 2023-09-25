<template>
  <div class="flex justify-center">
    <div class="container">
      <form class="form" @submit.prevent="created">

        <label for="name">Nome</label>
        <input v-model="form.user" type="text" >

        <label for="email">Email</label>
        <input type="email" name="email" class="border-gray-600 border " v-model="form.email">


        <label for="password" >password</label>
        <input type="password" name="password" v-model="form.password">

        <div class="btn">
          <button type="submit">
            login
          </button>
        </div>


      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'


export default {
  name: 'HomeView',
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

<style>

.container{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.form{
  display: flex;
  flex-direction: column;
  width: 30%;
}

input{
  border:black;
  background-color: rgb(205, 205, 205);
  border-radius: 10px;
}

.btn{
  background-color: black;
  color: white;
  padding: 10px;
  margin-top: 10px;
  text-align: center;
}
</style>