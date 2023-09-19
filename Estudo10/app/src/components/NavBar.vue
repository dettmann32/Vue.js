<template>
    <header class="flex items-center justify-between bg-gray-800 h-16 p-5">
    <div>
        <img src="../assets/img/hamburguer.png" alt="hamburguer" class="h-12 w-12">
    </div>
    <div>
        <button @click="openMenu" class="md:hidden">
            <img src="../assets/img/icons8-cardápio-50.png" alt="button">
        </button>
    </div>
    <div class="fixed left-0 top-0 w-[40%] bg-black h-[100%] opacity-30" v-if="menuActive">
        <input type="button" value="" @click="closeMenu" class="h-[100%] w-[100%]">
    </div>
    <div class="hidden md:flex  " :class="{nav:menuActive}">
         <nav>
        <ul class="md:flex gap-5 text-center">
            <div>
                <router-link to="/" class="text-yellow-300">Home</router-link>
            </div>
            <div>
                <router-link to="/Pedidos" class="text-yellow-300">Pedidos</router-link>
            </div>
        </ul>
    </nav> 
    </div>
    
    </header>
</template>

<script>
    export default {
        name: "NavBar",
        data(){
            return{
                menuActive: false
            }
        },
        methods:{
            openMenu: function(){
                this.menuActive = true
            },
            closeMenu: function(){
                this.menuActive = false
            }
        }
    }
</script>

<style scoped>
     .nav{
        @apply fixed right-0 top-0 bg-gray-600 h-[100%] w-[60%] flex flex-col items-center justify-center 
     }

</style>