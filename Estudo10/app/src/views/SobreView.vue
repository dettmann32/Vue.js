<template>
    <main class="h-[69vh]">
        <section class="flex justify-center">
            <div>
                <div class="text-center">
                    <h1 class="text-center mb-12 mt-10 text-2xl md:text-5xl">Gerenciador de Pedidos</h1>
                </div>
                <div class="flex justify-center border-gray-400 border-2 p-8 gap-16 rounded-sm" v-for="c in burger" :key="c.id">
                    <div class="flex md:block justify-center">
                        <ul class="md:flex flex-col md:flex-row items-center justify-center gap-[20%] text-center md:border-b-2 border-gray-800 shadow-sm mb-5 hidden">
                            
                            <div class="text-xl md:text-3xl">Nome:</div>
                            <div class="text-xl md:text-3xl">Pão:</div>
                            <div class="text-xl md:text-3xl">Carnes:</div>

                        </ul>
                        <ul class="flex flex-col justify-center md:flex-row md:gap-32 text-center">
                           
                            <div>{{ c.name }}</div>
                            <div>{{c.pao}}</div>
                            <div>{{ c.carne }}</div>

                        </ul>
                    </div>
                    <div class="flex items-center gap-5">
                        <button class="bg-gray-200 shadow-lg hover:bg-gray-400 p-5 rounded-md" @click="finalizar(c.id)">
                            Finalizar
                        </button>                       
                    </div>
                </div>

            </div>
        </section>
    </main>
</template>




<script>

export default{
    name:'SobreView',
    data(){
        return{
            burger:null
        }
    },
    methods:{
        async getElements() {
            const req = await fetch('http://localhost:3000/burgers')
            const data = await req.json()
            this.burger = data
            
        },
        async finalizar(id){
            const req = await fetch(`http://localhost:3000/burgers/${id}`, {
                method: 'DELETE'
            })
            const res = req.json()

            this.getElements()
        }
},
    mounted(){
            this.getElements()
        }
}

</script>