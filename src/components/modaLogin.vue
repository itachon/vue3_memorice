<style></style>
<template>
    <div class="hidden min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
        id="modalStart">
        <div class="absolute bg-black opacity-80 inset-0 z-0"></div>
        <div class="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
            <!--content-->
            <div class="">
                <!--body-->
                <div class="text-center p-5 flex-auto justify-center">


                    <h3 class="text-xl font-bold py-4 ">WELCOME</h3>
                    <p class="text-sm text-gray-500 px-8">At a first step select a player name</p>
                    <div class="mb-4">

                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username" v-model="username" type="text" placeholder="Username">
                    </div>
                </div>
                <!--footer-->
                <div class="p-3  mt-2 text-center space-x-4 md:block">

                    <button
                        class="mb-2 md:mb-0 bg-green-500 border border-green-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-600"
                        @click="start">start</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, watch } from 'vue';
import { asignado } from '../composables/functions.js'
const { start } = asignado(props.selAll, props.selOne, props.carts);
const props = defineProps(['carts', 'selAll', 'selOne'])
const username = ref('')
//emites
const emits = defineEmits(['updateusername'])
watch(username, async (newUsername, oldUsername) => {
    emits('updateusername', newUsername)
})
</script>