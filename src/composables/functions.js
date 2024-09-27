import { ref } from "vue";

export function assigned(selAll, selOne, carts) {
  const selectedcards = ref([]);
  const points = ref(0);
  const errors = ref(0);
  const exito = ref(false);
  const assign = (event) => {
    if (!event.target.classList.contains("rotate")) {
      if (!event.target.classList.contains("rotateactive")) {
        let elementos = selectedcards.value.push(event.target.id);

        if (elementos == 2) {
          event.target.classList.toggle("rotate");
          comprobar();
          if (exito.value) {
            selAll(".rotate").forEach((item) =>
              item.classList.add("rotateactive")
            );
            selAll(".rotate").forEach((item) =>
              item.classList.remove("rotate")
            );

            // selAll(".rotateactive .card--back .tick-mark").forEach((item) =>
            //   item.classList.remove("hidden")
            // );
            selAll('.rotateactive [class^="imagen_"]').forEach((item) =>
              item.classList.add("animate__animated", "animate__heartBeat")
            );
           

            selectedcards.value = [];
            points.value++;
            if (points.value == 20) {
              selOne("#modalResult").classList.remove("hidden");
            }
          } else {
            //animate__animated animate__shakeX
            errors.value++;
            selectedcards.value.forEach((el) =>
              selOne(".rotate .imagen_" + el).classList.add(
                "animate__animated",
                "animate__shakeX"
              )
            );
            // selAll(".rotate .card--back .tick-error").forEach((item) =>
            //   item.classList.remove("hidden")
            // );
            setTimeout(() => {
              //   selAll(".rotate .card--back .tick-error").forEach((item) =>
              //     item.classList.add("hidden")
              //   );
              selectedcards.value.forEach((el) =>
                selOne(".rotate .imagen_" + el).classList.remove(
                  "animate__animated",
                  "animate__shakeX"
                )
              );
              selAll(".rotate").forEach((item) =>
                item.classList.remove("rotate")
              );

              selectedcards.value = [];
            }, 1000);
          }
        } else if (elementos < 2) {
          event.target.classList.toggle("rotate");
        }
      }
    }
  };

  const comprobar = () => {
    if (selectedcards.value.length == 2) {
      exito.value = selectedcards.value.reduce((acc, ant) => {
        return acc == ant ? true : false;
      });
    } else {
      return false;
    }
  };

  const restart = () => {
    selAll(".rotateactive").forEach((item) => item.classList.add("rotate"));
    selAll(".rotateactive").forEach((item) =>
      item.classList.remove("rotateactive")
    );

    selAll(".rotate .card--back .tick-mark").forEach((item) =>
      item.classList.add("hidden")
    );
    selAll(".rotate").forEach((item) => item.classList.remove("rotate"));

    selectedcards.value = [];
    points.value = 0;
    errors.value = 0;
    setTimeout(() => {
      carts.value.sort(function () {
        return Math.round(Math.random()) - 0.5;
      });
    }, 1000);

    selOne("#modalResult").classList.add("hidden");
  };

  return { assign, selectedcards, points, errors, restart };
}
