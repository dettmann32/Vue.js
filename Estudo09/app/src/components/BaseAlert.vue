<template>
    <div class="flex bg-green-300 w-72 mt-20 rounded-md p-5">
        <p>Pedido enviado com sucesso</p>
        <button class="ml-5 bg-white w-20" @click="onClick">
            X
        </button>
    </div>
</template>

<script>
    export default {
        name:'BaseAlert',
        data(){
            
        },
        methods:{
            onClick(){
                this.$store.commit("alert", false )
            }
        }
    }
</script>

<style >

</style>