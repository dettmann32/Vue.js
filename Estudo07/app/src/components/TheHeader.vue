<template>
    <header>
        <h1>Email</h1>
        <p v-if="mostrar_email">{{ email }}</p>
        <button @click="showEmail">{{ mostrar }}</button>
    </header>
</template>

<script>
    export default{
        name : 'TheHeader',
    
    data(){
        return{
            mostrar : 'Mostrar Email',
            mostrar_email : false,
            email : "joão@gmail.com"
            }
        },
    methods: {
        showEmail(){
            this.mostrar_email = !this.mostrar_email
            if (this.mostrar_email){
                this.mostrar = 'Esconder Email'
            }else{
                this.mostrar = 'Mostrar Email'
            }
        }

        }
    }


</script>