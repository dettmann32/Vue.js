<template>
    <div class="flex justify-between h-20 bg-red-300 w-96" v-if="$store.state.ShowAlert2">
        Pedido negado 
        <button @click="fechou" class="p-10 ">X</button>
    </div>
</template>

<script>
    export default {
        name:'BaseAlert2',
      
    
    setup(){
    const fechou = () => {
            this.$store.commit('alert2', false)
        }

        return{
            fechou
        }
    }
    }
    
    
    
    
</script>

<style scoped>

</style>