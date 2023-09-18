import { ref } from 'vue';



export function asignado(selAll, selOne, carts) {


    const seleccionadas = ref([])
    const points = ref(0)
    const errors = ref(0)
    const exito = ref(false)
    const asignar = (event) => {


        if (!event.target.classList.contains('rotate')) {

            let elementos = seleccionadas.value.push(event.target.id)

            if (elementos == 2) {
                event.target.classList.toggle('rotate')
                comprobar()
                if (exito.value) {
                    selAll('.rotate').forEach(item => item.classList.add('rotateactive'))
                    selAll('.rotate').forEach(item => item.classList.remove('rotate'))


                    selAll('.rotateactive .card--back .tick-mark').forEach(item => item.classList.remove('hidden'))


                    seleccionadas.value = []
                    points.value++
                    if (points.value == 2) {
                        selOne('#modal-id').classList.remove('hidden')
                    }
                } else {
                    errors.value++
                    selAll('.rotate .card--back .tick-error').forEach(item => item.classList.remove('hidden'))
                    setTimeout(() => {
                        selAll('.rotate .card--back .tick-error').forEach(item => item.classList.add('hidden'))
                        selAll('.rotate').forEach(item => item.classList.remove('rotate'))

                        seleccionadas.value = []

                    }, 1000);
                }
            } else if (elementos < 2) {
                event.target.classList.toggle('rotate')
            }
        }


    };

    const comprobar = () => {
        if (seleccionadas.value.length == 2) {
            exito.value = seleccionadas.value.reduce((acc, ant) => {
                return acc == ant ? true : false
            })
        } else {
            return false
        }

    }
    const iniciar = () => {
        selOne('#inicio').classList.add('hidden')

    }
    const restart = () => {
        selAll('.rotateactive').forEach(item => item.classList.add('rotate'))
        selAll('.rotateactive').forEach(item => item.classList.remove('rotateactive'))



        selAll('.rotate .card--back .tick-mark').forEach(item => item.classList.add('hidden'))
        selAll('.rotate').forEach(item => item.classList.remove('rotate'))

        seleccionadas.value = []
        points.value = 0
        errors.value = 0
        setTimeout(() => {
            carts.value.sort(function () {
                return Math.round(Math.random()) - 0.5
            })
        }, 1000);


        selOne('#modal-id').classList.add('hidden')
    }


    return { asignar, seleccionadas, points, errors, iniciar, restart }
}



