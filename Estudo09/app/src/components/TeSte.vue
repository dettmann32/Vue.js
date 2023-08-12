<template>
    <div>
       <form action="https://google.com"
       @submit.prevent="onSubmit">
        <input 
        type="text"
        v-model="name"
        @keyup.enter="on()">
       </form>
    </div>
</template>

<script>
export default {
    name:"TeSte",
    data () {
        

        return {
            name:''
        }
    },
    methods:{
        on(){
            console.log(this.name)
        }
    }
}
</script>

<style  scoped>

</style>