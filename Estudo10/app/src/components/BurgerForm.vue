<template>
    <div class="mt-10 flex justify-center flex-col h-[400px]">
        <h1 class="text-center mb-20 mt-5 text-5xl">Faça seu pedido aqui </h1>
        <div class="absolute top-[500px] right-0 bg-gray-200 p-5 rounded-l-md" v-if="mensage">
            <div class="flex gap-5 items-center text-lg">
                <button class="border-gray-400 border rounded-[100%] py-3 px-5" @click="mensagem">
                    X
                </button>
                <p>Pedido realizado com sucesso</p>
               
            </div>
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

export default{
    name: 'BurgerForm',

    data(){
        return{
            paes:null,
            carnes:null,
            selpao:'',
            selcarne:"",
            mensage: false
        }
    },
    methods:{
        async getElementes(){
            const req = await fetch("http://localhost:3000/ingredientes")
            const data = await req.json()
            this.paes = data.paes
            this.carnes = data.carnes
            

        },
        async createdBurger(){
            const data = {
                pao : this.selpao,
                carne : this.selcarne
            }

            const dataJson = JSON.stringify(data)

            const req = await fetch("http://localhost:3000/ingredientes/burger",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body: dataJson
            })

           this.selpao = '',
           this.selcarne = ''

           this.mensage = true

        },
        mensagem(){
            this.mensage = !this.mensage
        }
        

        
    },
    mounted(){
        this.getElementes()
        
    }
        


    
}
</script>