import { hoursLoad } from "../form/hours-load.js"

const selectedDate = document.getElementById("date")

export function schedulesDay() {
  // Renderiza as horas disponíveis
  const date = selectedDate.value

  // Os horários disponíveis
  hoursLoad({date})
}