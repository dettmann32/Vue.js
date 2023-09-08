<template>
    <main>
       <section  class="flex items-center h-[600px] bg-left bg-cover bg-no-repeat" style="background-image: url('https://www.sabornamesa.com.br/media/k2/items/cache/b9ad772005653afce4d4bd46c2efe842_XL.jpg');" >
       <div>
         <h1 class=" text-yellow-200 text-4xl sm:text-6xl md:text-8xl bg-gray-700 bg-opacity-50 px-5 py-8">Make Your Burger</h1>
       </div>
       </section>
       <section>
            <div class="flex justify-center">
            
                <BurgerForm></BurgerForm>
            </div>
       </section>
    </main>
</template>
<script>
import BurgerForm from '@/components/BurgerForm.vue';
export default{
 components:{
    BurgerForm
 }
}
</script>