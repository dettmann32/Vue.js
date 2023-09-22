<template>
    <main class="h-[85vh]">
        <section class="flex justify-center mb-20">
            <div>

                <div class="text-center">
                    <h1 class="text-center mb-12 mt-10 text-5xl">Gerenciador de Pedidos</h1>
                </div>

                <!-- Tabela de Pedidos -->
                
                    <div class="flex border-gray-900 border-y-2 p-8 gap-4 mb-4 " v-for="c in burger" :key="c.id">

        <table >
            
            <div class="mx-[15vw] md:m-0">
                <td class="hidden md:flex items-center justify-center gap-36 text-center  mb-5">
                    <tr>
                        <span class="md:text-3xl md:mx-10 w-15">Nome:</span>
                        <span class="md:text-3xl md:mx-10 md:w-12">Pão:</span>
                        <span class="md:text-3xl md:mx-10 w-15">Carnes:</span>
                    </tr>
                </td>
                <td class="flex flex-col md:flex-row justify-center text-center gap-3">
                    <span class="md:mx-10 w-15">{{ c.name }}</span>
                    <span class="md:mx-10 md:w-12">{{c.pao}} </span>
                    <span class="md:mx-10 w-15">{{ c.carne }}</span>
                </td>
            </div>
            
        </table>
                <div class="flex items-center gap-5 justify-center">
                    <button class="bg-black p-3 md:p-5 rounded-lg hover:bg-gray-600 text-yellow-300" @click="finalizar(c.id)">
                        Finalizar
                    </button>
                </div>
            </div>
                
            </div>
        </section>
    </main>
</template>




<script>
import router from '@/router'
import axios from 'axios'


export default{
    name:'PedidosView',
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
        async finalizar(id) {
        const index = this.burger.findIndex(item => item.id === id);
        if (index !== -1) {
            this.burger.splice(index, 1); // Remove o item do array
            await axios.delete(`http://localhost:3000/burgers/${id}`);
        }
}
},
    mounted(){
            this.getElements()
        }
}

</script>