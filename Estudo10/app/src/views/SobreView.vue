<template>
    <main class="h-[67.67vh]">
        <section class="flex justify-center">
            <div>
                <div class="text-center">
                    <h1 class="text-center mb-12 mt-10 text-5xl">Pedidos</h1>
                </div>
                <div class="flex border-gray-400 border-2 p-8 gap-4" v-for="c in burger" :key="c.id">
                    <div>
                        <ul class="flex items-center justify-center gap-36 text-center border-b-2 border-gray-800 mb-5">
                            <div class="text-3xl">Nome:</div>
                            <div class="text-3xl">Pão:</div>
                            <div class="text-3xl">Carnes:</div>
                        </ul>
                        <ul class="flex justify-center gap-32 text-center">
                            <div>{{ c.name }}</div>
                            <div>{{c.pao}}</div>
                            <div>{{ c.carne }}</div>
                        </ul>
                    </div>
                    <div class="flex items-center gap-5">
                        <button class="bg-gray-300 p-5">
                            Finalizado
                        </button>
                        <button>
                            Cancela
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
            
        }
    
},
    mounted(){
            this.getElements()
        }
}

</script>