<template>
    <div class="mt-10 flex justify-center flex-col h-[400px]">
        <h1 class="text-center mb-20 -mt-20 text-5xl">Faça seu pedido</h1>
        <div class="my-5 text-4xl border-l-4 border-l-yellow-300 pl-3">
            <h2>Pão</h2>
        </div>
        <div>
            <select name="Pão" id="" class="w-[40vw] text-center  border-solid border-black border-2">
                <option v-for="pao in paes" :key="pao.id" value="paor">{{ pao.tipo }}</option>
            </select>
        </div>
        <div class="my-5 text-4xl border-l-4 border-l-yellow-300 pl-3">
            <h2>Carnes</h2>
        </div>
        <div>
            <select name="Carnes" id="" class="w-[40vw] text-center  border-solid border-black border-2">
                <option v-for="carne in carnes" :key="carne.id" value="carner">{{ carne.tipo }}</option>
            </select>
        </div>
        <div>
            <button @click="createdBurger()">
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
        }
    },
    methods:{
        async getElementes(){
            const req = await fetch("http://localhost:3000/ingredientes")
            const data = await req.json()
            this.paes = data.paes
            this.carnes = data.carnes
            

        },
        async createdBurger(e){
            e.preventDefault()
            const data : {
                
            }

        }
    },
    mounted(){
        this.getElementes()
    }
        


    
}
</script>