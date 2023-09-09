<template>
    <main class="h-[100%]">
        {{ burger }}
    </main>
</template>




<script>

export default{
    name:'SobreView',
    data(){
        return{
            burger:''
        }
    },
    methods:{
        async getElements() {
            const req = await fetch('http://localhost:3000/burger')
            const data = req.json()
            this.burger = data
            console.log(data)
        }
    
},
    mounted(){
            this.getElements()
        }
}

</script>