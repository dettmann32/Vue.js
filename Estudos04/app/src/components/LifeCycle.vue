<template>
    <div>
        <h1>Meu nome é:{{ nome }}</h1>
    </div>
</template>

<script>


    export default {
        name : 'LifeCycle',
    data(){
       return{ nome:' ainda não sei'
}
    
    },
    created(){
        this.nome = ' Lucas'
    },
    mounted(){
        this.nome = ' Matheus'
    }
}
    
</script>

<style>

</style>