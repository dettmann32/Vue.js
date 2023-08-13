<template>
    <div>
       <form action="https://google.com"
       @submit.prevent="onSubmit">
        <input 
        type="text"
        v-model="name"
        @keyup.enter="on()" class="border">
        <button @click="click">btn</button>
       </form>
       {{ prop }}
       <p v-if="data">{{ name }} </p>
       <slot></slot>
       <p v-if="data" v-for="us in users" :key="us.id">nome: {{ us.user }} <br> idade: {{ us.age }}</p>
    </div>
</template>

<script>
export default {
    name:"TeSte",
    data () {
        

        return {
            name:'',
            data:false,
            users:[
                {
                    user:'joão',
                    age:'34',
                    id:'1'
                },
                {
                    user:'joão',
                    age:'34',
                    id:'1'
                },
                {
                    user:'joão',
                    age:'34',
                    id:'1'
                }
            ]
                    
        }
    },
    

    methods:{
        on(){
            console.log(this.name)
        },
        click(){
            this.data = !this.data
        },

       
      
    },
    props:['prop']

    

    // Chama a função name1() aqui
   
}
</script>

<style  scoped>

</style>