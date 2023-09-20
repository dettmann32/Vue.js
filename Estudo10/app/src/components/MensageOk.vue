<template>
     <div class="fixed top-[95px] right-0 bg-gray-200 p-5 rounded-l-md shadow-xl" v-if="this.$store.state.mensage">
            <div class="flex gap-5 items-center text-lg">
                <button class="border-gray-400 border rounded-[100%] py-3 px-5" @click="mensagem">
                    X
                </button>
                <p>Pedido realizado com sucesso</p>
               
            </div>
        </div>
</template>
<script>
export default{
    name:'MensageOk',

    data(){
        return{

        }
    },
    methods:{
        mensagem(){
            this.$store.commit('fechar_mensagem', false)
        },
    }
}
</script>