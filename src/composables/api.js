import { ref } from 'vue';


export function apiCards() {

    const carts = ref([])
    const apicards = async () => {
        let apiCarts = await fetch('https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20')
        let result = await apiCarts.json();
        carts.value = await [...result.entries, ...result.entries];

        //RANDOM ORDER OF THE CARDS
        carts.value.sort(function () {
            return Math.round(Math.random()) - 0.5
        })
    }


    return { apicards, carts }
}