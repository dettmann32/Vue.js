<template>
    <div>
        <p>A descrição dessa pessoa: {{ nome }}</p>
        <p v-if="esta_trabalhando">Esta trabalhando</p>
        <p v-else>Não esta trabalhando</p>
        <p>Acesse esse site <a v-bind:href="link" target="_blank">Google</a></p>
        <div><img :src="img" alt=""></div>
        <button @click="showEmail">{{ Textbtn }}</button>
        <p v-if="mostrar_email">Email@gmail.com</p>
    </div>
</template>



<script>
let João = 'João'
    export default{
        name : "UmaPessoa",
    
     data(){
        return{
            nome : "Lucas",
            esta_trabalhando : true,
            link : 'https://google.com',
            img : ".../../public/img/manager.png",
            mostrar_email: false,
            Textbtn : "Mostrar Email"
    }

  
   
    },
     created(){
        this.nome = João
    },
  methods: {
        showEmail(){
            this.mostrar_email = !this.mostrar_email
            if(!this.mostrar_email){
                this.Textbtn = "Mostra Email"
            }else{
                this.Textbtn = "Esconder Email"
            }

        }
        
    }
}
   

</script>