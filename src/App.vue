<style>
li {
  margin-bottom: 20px; /* Espacio vertical de 20px entre los elementos */
}

/* Opcional: eliminar el espacio del último elemento */
li:last-child {
  margin-bottom: 0;
}
</style>
<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div>MEMORY GAME</div>

      <div class="w-full md:block md:w-auto" id="navbar-default">
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>USER : {{ username }}</li>
          <li>SCORE : {{ points }}</li>
          <li>ERRORS : {{ errors }}</li>
          <li>
            <button class="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-xs shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600" @click="restart">RESTART GAME</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="flex items-center bg-gray-50">
    <div class="mx-[20%] rounded-lg bg-white px-8 py-4 shadow-md">
      <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 px-25">
        <li class="flex items-center flex-col" v-for="(chunkValues, indexChunk) in carts" :key="indexChunk">
          <div class="flip-container mb-6" v-for="(intervalue, index) in chunkValues" :key="index">
            <div class="flipper" ref="target" :id="intervalue.mal_id" @click.stop="assign">
              <div class="card card--front" style="pointer-events: none">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Pokemon_Trading_Card_Game_cardback.jpg/220px-Pokemon_Trading_Card_Game_cardback.jpg" alt="Imagen 1" />
              </div>
              <div class="card card--back" style="pointer-events: none">
                <img :src="intervalue.images.jpg.image_url" alt="Imagen 2" :class="`imagen_${intervalue.mal_id}`"/>
                <div class="tick tick-mark hidden"></div>
                <div class="tick tick-error animate__animated animate__shakeX hidden "></div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <ModalLogin :carts="carts" :selAll="selAll" :selOne="selOne" :username="username" @updateusername="updateUsername" />
  <ModalResult :username="username" :points="points" :errors="errors" @restartgame="restart" />
</template>
<script setup>
import { ref, onMounted } from "vue";
const selAll = document.querySelectorAll.bind(document);
const selOne = document.querySelector.bind(document);

//EMIS
//COMPOSABLE
import { assigned } from "./composables/functions.js";
import { apiCards } from "./composables/api.js";
const { apicards, carts } = apiCards();
const { assign, selectedcards, points, errors, restart } = assigned(selAll, selOne, carts);

//COMPONENTES

import ModalLogin from "./components/modaLogin.vue";
import ModalResult from "./components/modalResult.vue";
const username = ref(localStorage.getItem("username"));

const updateUsername = (newUsername) => {
  username.value = newUsername;
};

onMounted(() => {
  apicards();
  console.log(localStorage.getItem("username"));
  if (localStorage.getItem("username") == undefined || localStorage.getItem("username") == "") {
    selOne("#modalStart").classList.remove("hidden");
  }
});
</script>
