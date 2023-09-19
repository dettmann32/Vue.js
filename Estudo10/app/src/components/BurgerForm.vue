<template>
    <div class="mt-10 flex justify-center flex-col h-[400px]">
        <h1 class="text-center mb-12 mt-10 text-5xl">Faça seu pedido aqui </h1>
        <div class="fixed top-[95px] right-0 bg-gray-200 p-5 rounded-l-md shadow-xl" v-if="mensage">
            <div class="flex gap-5 items-center text-lg">
                <button class="border-gray-400 border rounded-[100%] py-3 px-5" @click="mensagem">
                    X
                </button>
                <p>Pedido realizado com sucesso</p>
               
            </div>
        </div>
        <div class="fixed top-[95px] right-0 bg-red-600 p-5 rounded-l-md shadow-xl" v-if="mensage_erro">
            <div class="flex gap-5 items-center text-lg">
                <button class="border-red-400 border rounded-[100%] py-3 px-5" @click="mensagem_erro">
                    X
                </button>
                <p>Preencha todos os campos obrigatórios</p>
               
            </div>
        </div>
        <div class="my-5 text-4xl border-l-4 border-l-yellow-300 pl-3 ml-10">
            <h2>Nome</h2>
        </div>
        <div class="flex justify-center">
            <input type="text" name="name" id="" class="w-[40vw] text-center  border-solid border-black border-2" v-model="selname">
        </div>

        <div class="my-5 text-4xl border-l-4 border-l-yellow-300 pl-3 ml-10">
            <h2>Pão</h2>
        </div>
        <div class="flex justify-center">
            <select name="Pão" id="" class="w-[40vw] text-center  border-solid border-black border-2" v-model="selpao">
                <option v-for="pao in paes" :key="pao.id" >{{ pao.tipo }}</option>
            </select>
        </div>
        <div class="my-5 text-4xl border-l-4 border-l-yellow-300 pl-3 ml-10">
            <h2>Carnes</h2>
        </div>
        <div class="flex justify-center">
            <select name="Carnes" id="" class="w-[40vw] text-center  border-solid border-black border-2" v-model="selcarne">
                <option v-for="carne in carnes" :key="carne.id" >{{ carne.tipo }}</option>
            </select>
        </div>
        <div class="flex justify-center mt-5 w-[95vw] text-yellow-300 p-5">
            <button @click="createdBurger" class="w-[40%] bg-gray-900 rounded-lg p-2">
                Crie seu Burger
            </button>
        </div>
    </div>
</template>

<script>

const axios = require('axios')
export default{
    name: 'BurgerForm',

    data(){
        return{
            paes:null,
            carnes:null,
            selpao:null,
            selcarne:null,
            mensage: false,
            selname: null,
            mensage_erro:false
        }
    },
    methods:{
        

        async getElementes(){
            const paes = await axios.get("http://localhost:3000/paes")
            this.paes = paes.data

            const carnes = await axios.get("http://localhost:3000/carnes")
            this.carnes = carnes.data
            
           

        },
        async createdBurger(){
           if (this.selpao && this.selcarne && this.selname != null){
            const data = {
                pao : this.selpao,
                carne : this.selcarne,
                name: this.selname
            }

            const dataJson = JSON.stringify(data)

            const req = await fetch("http://localhost:3000/burgers",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body: dataJson
            })
            this.mensage = true
        }else{this.mensage_erro = true}

           this.selpao = '',
           this.selcarne = '',
           this.selname = ''

           

        },
        mensagem(){
            this.mensage = !this.mensage
        },
         mensagem_erro(){
            this.mensage_erro = !this.mensage_erro
    }

        
    },
    mounted(){
         this.getElementes()
        
    }
   
        


    
}
</script>