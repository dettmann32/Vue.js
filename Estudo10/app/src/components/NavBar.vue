<template>
    <header class="flex items-center justify-between bg-gray-600 h-16 p-5">
    <div>
        <img src="../assets/img/globo-terrestre-com-mapas-de-continentes.png" alt="globo terrestre" class="h-12 w-12">
    </div>
    <nav >
        <ul class="flex justify-between gap-10">
            <div>
                <router-link to="/Home">Home</router-link>
            </div>
            <div>
                <router-link to="SobreView">Sobre</router-link>
            </div>
        </ul>
    </nav>
    </header>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>

</style>