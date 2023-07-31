<template>
    <header>
        <h1 class="h1">Email</h1>
        <p v-if="mostrar_email">{{ email }}</p>
        <button @click="showEmail">{{ mostrar }}</button>
        <form action="" @submit="enviar($event), evento2()">
        <input type="text" v-model="email1">
        <button>Enviar</button>
        <p>{{ evento }}</p>
        </form>
    </header>
</template>

<script>
    export default{
        name : 'TheHeader',
    
    data(){
        return{
            mostrar : 'Mostrar Email',
            mostrar_email : false,
            email : "joão@gmail.com",
            email1 : "",
            evento : "",
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
        },
        enviar(e){
            this.evento = "Primeiro Evento"
            const email2 = this.email1
            e.preventDefault();

            console.log('Form enviado' + email2)
        },
        evento2(){
            setTimeout(() => this.evento = 'Segundo evento', 500 )
        }

        }
    }


</script>

<style>
.h1{
    color: red;
}
</style>