<template>
    <main>
        <p v-if="mostraremail">{{ email }}</p>
        <button @click="MostrarEmail">{{ textemail }}</button>
    </main>
</template>


<script>
 export default{
    name : 'TheMain',
    data(){
       return{ 
        email : 'email@gmail.com',
       mostraremail : false,
       textemail : 'Mostrar Email'
       
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