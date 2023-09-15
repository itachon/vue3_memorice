<style></style>
<template>
    <div class="flex  items-center justify-center bg-gray-50">
        <div class="w-full  rounded-lg bg-white px-8 py-4 shadow-md m-4">
            <div class="flex px-1 py-4">
                <h3 class="font-bold text-2xl font-sans pl-10">MEMORY GAME</h3>
                <h3 class="font-bold text-2xl font-sans pl-10">POINTS {{ points }}</h3>
                <h3 class="font-bold text-2xl font-sans pl-10">ERRORS {{ errors }}</h3>
            </div>
            
            <ul class="grid grid-cols-10 gap-2 px-1">
                <li class="flex items-center flex-col p-1" v-for="(intervalue, index) in cartsaux" :key="index">

                    <div class="flip-container">
                        <div class="flipper" ref="target" :id="intervalue.fields.image.uuid" @click.stop="asignar">
                            <div class="front" rel="back" style="pointer-events: none;">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Card_back_01.svg"
                                    alt="Imagen 1">
                            </div>
                            <div class="back" rel="front" style="pointer-events: none;">
                                <img :src="intervalue.fields.image.url" alt="Imagen 2">
                            </div>
                        </div>
                    </div>





                </li>

            </ul>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue';

export default {
    setup() {
        const nombre = ref('Hola Mundo2')
        const num = ref(0)
        const carts = ref([])
        const cartsaux = ref([])
        const front = ref()
        const seleccionadas = ref([])
        const exito = ref(false)
        const points = ref(0)
        const errors = ref(0)
        function increment() {
            alert(num.value)
            num.value = num.value + 1
        }
        function asignar(e) {


            if (!e.target.classList.contains('rotate')) {

                let elementos = seleccionadas.value.push(e.target.id)

                if (elementos == 2) {
                    e.target.classList.add('rotate')
                    comprobar()
                    if (exito.value) {
                        document.querySelectorAll('.rotate').forEach(item => item.classList.add('rotateactive'))
                        document.querySelectorAll('.rotate').forEach(item => item.classList.remove('rotate'))
                        seleccionadas.value = []
                        points.value++
                    } else {
                        setTimeout(() => {
                            document.querySelectorAll('.rotate').forEach(item => item.classList.remove('rotate'))
                            seleccionadas.value = []
                            errors.value++
                        }, 2000);
                    }
                } else if (elementos < 2) {
                    e.target.classList.add('rotate')
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
            nombre,
            num,
            carts,
            cartsaux,
            seleccionadas,
            points,
            errors,
            increment,
            asignar
        }
    },
    async mounted() {
        let cartas = await fetch('https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20')
        let result = await cartas.json();
        this.carts = await result.entries;
        this.cartsaux = await [...this.carts, ...result.entries];
        this.cartsaux.sort(function () {
            return Math.round(Math.random()) - 0.5
        })
    }
}
</script>