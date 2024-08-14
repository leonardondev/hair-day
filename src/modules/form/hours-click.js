export function hoursClick() {
  const hours = document.querySelectorAll(".hour-available");

  hours.forEach(available => {
    available.addEventListener("click", selected => {
      hours.forEach(hour => {
        /* remove todas as seleções das li */
        hour.classList.remove("hour-selected")
      })

      /* Adiciona a seleção na li clicada */
      selected.target.classList.add("hour-selected")
    })
  })
}