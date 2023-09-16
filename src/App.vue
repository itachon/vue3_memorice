<style>
.tick-mark {
    width: 50%;
    height: 50%;
    position: absolute;
    top: 0;
    margin: 40px;
}

.tick-mark::before {
    position: absolute;
    left: 0;
    top: 50%;
    height: 50%;
    width: 10px;
    background-color: #4ff964;
    content: "";
    transform: translateX(10px) rotate(-45deg);
    transform-origin: left bottom;
}

.tick-mark::after {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 10px;
    width: 100%;
    background-color: #4ff964;
    content: "";
    transform: translateX(10px) rotate(-45deg);
    transform-origin: left bottom;
}

/*incorrecta*/

.tick-error {
    width: 50%;
    height: 50%;
    position: absolute;
    top: 0;
    margin: 40px;
}

.tick-error::before {
    position: absolute;
    left: 0;
    top: 50%;
    height: 50%;
    width: 10px;
    background-color: #fb0000;
    content: "";
    transform: translateX(40px) rotate(-45deg);
    transform-origin: left bottom;
}

.tick-error::after {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 10px;
    width: 50%;
    background-color: #fb0000;
    content: "";
    transform: translateX(10px) rotate(-45deg);
    transform-origin: left bottom;
}

.hidden {
    display: none;
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


    <div id="popup-modal" tabindex="-1"
        class="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative w-full max-w-md max-h-full">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button type="button"
                    class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="popup-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
                <div class="p-6 text-center">
                    <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete
                        this product?</h3>
                    <button data-modal-hide="popup-modal" type="button"
                        class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                        Yes, I'm sure
                    </button>
                    <button data-modal-hide="popup-modal" type="button"
                        class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No,
                        cancel</button>
                </div>
            </div>
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
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 -m-1 flex items-center text-red-500 mx-auto"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 flex items-center text-red-500 mx-auto"
                        viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clip-rule="evenodd" />
                    </svg>
                    <h3 class="text-xl font-bold py-4 ">CONGRATULATIONS</h3>
                    <p class="text-sm text-gray-500 px-8">You have complete the memory game Whit the score of {{ points }}
                        and the amount of {{ errors }} errors </p>
                </div>
                <!--footer-->
                <div class="p-3  mt-2 text-center space-x-4 md:block">

                    <button
                        class="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600">ACEPTAR</button>
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