<template>
    <header>
        <h1>Header</h1>
        <p>Meu nome é {{ nome }}</p>
        <UmaPessoa></UmaPessoa>
        <ThePicturi></ThePicturi>
    </header>
</template>

<script>
import UmaPessoa from "./UmaPessoa.vue"
import ThePicturi from "./ThePicturi.vue"
    export default {
        name : 'TheHeader',
    components:{
        UmaPessoa,ThePicturi
    },
    
    data(){
        return{
            nome :' Ainda não sei'
        }
    
    },
    created(){
        this.nome ='João'
    },
    mounted(){
        this.nome = 'Lucas'
    }
    }
   
</script>

<style>

</style>