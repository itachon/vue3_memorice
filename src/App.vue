<style>
.cls-1 {
    fill: #0074ff;
}

.cls-2 {
    fill: #ffb300;
}
</style>
<template>
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div>MEMORY GAME</div>

            <div class=" w-full md:block md:w-auto" id="navbar-default">
                <ul
                    class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

                    <li>
                        PUNTOS : {{ points }}
                    </li>
                    <li>
                        ERRORES : {{ errors }}
                    </li>

                </ul>
            </div>
        </div>
    </nav>
    <div class="flex  items-center justify-center bg-gray-50">
        <div class="w-full  rounded-lg bg-white px-8 py-4 shadow-md m-4">



            <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-10 gap-2 px-1">
                <li class="flex items-center flex-col p-1" v-for="(intervalue, index) in carts" :key="index">

                    <div class="flip-container">
                        <div class="flipper" ref="target" :id="intervalue.fields.image.uuid" @click.stop="asignar">
                            <div class="front" rel="back" style="pointer-events: none;">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Card_back_01.svg"
                                    alt="Imagen 1">
                            </div>
                            <div class="back" rel="front" style="pointer-events: none;">
                                <img :src="intervalue.fields.image.url" alt="Imagen 2">
                                <div class="tick-mark hidden"></div>
                                <div class="tick-error hidden"></div>
                            </div>
                        </div>
                    </div>





                </li>

            </ul>
        </div>
    </div>



    <div class="hidden min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
        id="modal-id">
        <div class="absolute bg-black opacity-80 inset-0 z-0"></div>
        <div class="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
            <!--content-->
            <div class="">
                <!--body-->
                <div class="text-center p-5 flex-auto justify-center">

                    <svg width="40px" height="40px" viewBox="0 0 64 64" data-name="Layer 1" id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg" style="margin-left:46%">

                        <title />
                        <path class="cls-1"
                            d="M41.78,57.13a7.12,7.12,0,0,1-4.2-1.39l-4.32-3.16a3.12,3.12,0,0,0-3.7,0l-4.32,3.16a7.14,7.14,0,0,1-11.31-6.53l.58-5.32a3.11,3.11,0,0,0-1.85-3.2L7.77,38.53a7.13,7.13,0,0,1,0-13.06l4.89-2.16a3.11,3.11,0,0,0,1.85-3.2l-.58-5.32A7.14,7.14,0,0,1,25.24,8.26l4.32,3.16a3.12,3.12,0,0,0,3.7,0l4.32-3.16A7,7,0,0,1,43,7a7.25,7.25,0,0,1,4.75,3.13,2,2,0,1,1-3.34,2.2,3.23,3.23,0,0,0-2.12-1.39,3,3,0,0,0-2.37.57l-4.32,3.16a7.13,7.13,0,0,1-8.43,0l-4.31-3.16a3.13,3.13,0,0,0-5,2.87l.58,5.31A7.11,7.11,0,0,1,14.28,27l-4.9,2.16a3.14,3.14,0,0,0,0,5.74L14.28,37a7.11,7.11,0,0,1,4.21,7.3l-.58,5.31a3.13,3.13,0,0,0,5,2.87l4.31-3.16a7.13,7.13,0,0,1,8.43,0l4.32,3.16a3.13,3.13,0,0,0,5-2.87l-.58-5.31A7.1,7.1,0,0,1,48.54,37l4.9-2.16a3.14,3.14,0,0,0,0-5.74L50.78,28a2,2,0,1,1,1.61-3.66l2.66,1.17a7.13,7.13,0,0,1,0,13.06l-4.89,2.16a3.13,3.13,0,0,0-1.86,3.2l.58,5.32a7,7,0,0,1-3.52,6.95A7.17,7.17,0,0,1,41.78,57.13Z" />
                        <path class="cls-2"
                            d="M31.64,39a2,2,0,0,1-1.42-.59l-8.61-8.61A2,2,0,1,1,24.44,27l7.2,7.2L57.08,8.72a2,2,0,0,1,2.82,2.83L33.05,38.4A2,2,0,0,1,31.64,39Z" />
                    </svg>
                    <h3 class="text-xl font-bold py-4 ">CONGRATULATIONS</h3>
                    <p class="text-sm text-gray-500 px-8">You have complete the memory game Whit the score of {{ points }}
                        and the amount of {{ errors }} errors </p>
                </div>
                <!--footer-->
                <div class="p-3  mt-2 text-center space-x-4 md:block">

                    <button
                        class="mb-2 md:mb-0 bg-green-500 border border-green-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-600">ACEPTAR</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue';
const d = document.querySelectorAll.bind(document)
const b = document.querySelector.bind(document)
export default {
    setup() {
        const carts = ref([])
        const front = ref()
        const seleccionadas = ref([])
        const exito = ref(false)
        const points = ref(0)
        const errors = ref(0)

        function asignar(e) {


            if (!e.target.classList.contains('rotate')) {

                let elementos = seleccionadas.value.push(e.target.id)

                if (elementos == 2) {
                    e.target.classList.toggle('rotate')
                    comprobar()
                    if (exito.value) {
                        d('.rotate').forEach(item => item.classList.add('rotateactive'))
                        d('.rotate').forEach(item => item.classList.remove('rotate'))


                        d('.rotateactive .back .tick-mark').forEach(item => item.classList.remove('hidden'))


                        seleccionadas.value = []
                        points.value++
                        if (points.value == 3) {
                            b('#modal-id').classList.remove('hidden')
                        }
                    } else {
                        errors.value++
                        d('.rotate .back .tick-error').forEach(item => item.classList.remove('hidden'))
                        setTimeout(() => {
                            d('.rotate .back .tick-error').forEach(item => item.classList.add('hidden'))
                            d('.rotate').forEach(item => item.classList.remove('rotate'))

                            seleccionadas.value = []

                        }, 1000);
                    }
                } else if (elementos < 2) {
                    e.target.classList.toggle('rotate')
                }
            }

            console.log(seleccionadas.value)

        }
        function comprobar(t) {
            if (seleccionadas.value.length == 2) {
                exito.value = seleccionadas.value.reduce((acc, ant) => {
                    return acc == ant ? true : false
                })
            } else {
                return false
            }
        }
        return {
            carts,
            seleccionadas,
            points,
            errors,
            asignar
        }
    },
    async mounted() {
        let cartas = await fetch('https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20')
        let result = await cartas.json();
        this.carts = await [...result.entries, ...result.entries];
        this.carts.sort(function () {
            return Math.round(Math.random()) - 0.5
        })
    }
}
</script>