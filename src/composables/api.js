import { ref } from "vue";

export function apiCards() {
  const carts = ref([]);
  const apicards = async () => {
    let apiCarts = await fetch("https://api.jikan.moe/v4/characters");
    let result = await apiCarts.json();
    const cartas = result.data.splice(0, 10);
    const cartsArray = await [...cartas, ...cartas];
    carts.value = chunkArray(cartsArray, 4);
    
    //RANDOM ORDER OF THE CARDS
    carts.value.sort(function () {
      return Math.round(Math.random()) - 0.5;
    });
  };
  function chunkArray(array, size) {
    const result = [];

    for (let i = 0; i < array.length; i += size) {
      const chunk = array.slice(i, i + size);
      result.push(chunk);
    }

    return result;
  }

  return { apicards, carts };
}
