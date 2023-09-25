<template>
  <div class="flex justify-center">
    <div class="container">
      <form class="form">
        <label for="email">Email</label>
        <input type="email" name="email" class="border-gray-600 border ">
        <label for="password" >password</label>
        <input type="password" name="password">


      </form>
    </div>
  </div>
</template>
<script>

export default {
  name:'AboutView',

  data(){
    return{

    }
  }
}
</script>

<style scoped>

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

.input{
  border:black;
  background-color: gray;

  
}
</style>