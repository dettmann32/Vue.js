<template>
    <div>
        <form action="" >
            <input type="txt" v-model="email1">
            <button @click="enviar($event)">{{ texto }}</button>
            <p v-if="variavel">{{ email }}</p>
            <p>{{ pemail }}</p>
            {{ eemail }}
        </form>
        <button @click="$emit(mudarTexto)">Botão</button>
    </div>
</template>

<script>
export default {
    data () {
        

        return {
            texto : 'Aperte para esconder',
            variavel : false,
            email : 'joão@email.com',
            eemail:"sssss"
        }
    },
    emits:['mudarTexto'],
    methods:{
        enviar(e){  
            e.preventDefault()          
            this.variavel = !this.variavel
            if(this.variavel){this.texto = 'Aperte para mostrar'
        }else{
            this.texto = 'Aperte para esconder'
        }
        console.log(this.email1)

        },
       
        
    },
    props:{
    pemail:String
  }
    
}
</script>

<style lang="scss" scoped>

</style>