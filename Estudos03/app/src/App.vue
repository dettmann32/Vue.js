<template>
  <div>
    <TheHead></TheHead>
    <TheMain></TheMain>
    <footer><a href="pagina2.vue" target="_blank">link</a></footer>
  </div>
</template>

<script>
import TheHead from './components/TheHead.vue'
import TheMain from './components/TheMain.vue'
  export default {
    name : 'App',
    components: {
     TheHead,TheMain
    }

  }
</script>

<style>

</style>