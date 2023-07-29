<template>
    <main>
        <p v-if="mostraremail">{{ email }}</p>
        <button @click="MostrarEmail">{{ textemail }}</button>
        <p v-for="c in lista" :key="c.id"> {{ c.nome }}</p>
    </main>
</template>


<script>
 export default{
    name : 'TheMain',
    data(){
       return{ 
        email : 'email@gmail.com',
       mostraremail : false,
       textemail : 'Mostrar Email',
       lista : [
           {id : 1, nome :'joão'},
           {id : 2, nome :'marcos'} ,
           {id : 3, nome :'pedro'} ,
           {id : 4, nome :'lucas'} , 
       ]
       
    }
    },
    methods:{
        MostrarEmail(){
            this.mostraremail = !this.mostraremail
            if (!this.mostraremail){
                this.textemail = "Mostrar Email"
            }else{
                this.textemail = 'Esconder Email'
                this.mostraremail = true
            }
        }
    },
    created(){
        this.email = 'joão@gmail.com'
    }
 }
</script>