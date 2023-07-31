<template>
    <div>
        <button @click="ativou()">{{ Ative }}</button>
        <span v-show="ativar">Ativado</span>
        <form action="" @submit="enviar($event)">
            <input type="text" v-model="mensage">
            <button>enviar</button>
        </form>
    </div>
</template>
<script>
    export default{
        name : "ReutilizaçãoDeComponentes",
        data(){
            return{
                ativar : false,
                Ative : 'clique para ativar',
                mensage : ""
            }
        },
        methods:{
            ativou(){
                this.ativar = !this.ativar
                if(this.ativar == true){
                    this.Ative =" clique para desativar"
                }else{
                    this.Ative = ' clique para ativar'
                }
            },
            enviar(e){
                e.preventDefault()
                this.mensagef = this.mensage
                console.log('a mensagem enviada foi mensage' + this.mensagef)
            }
        }
    }

</script>