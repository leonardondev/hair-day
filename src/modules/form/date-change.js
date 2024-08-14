// import dayjs from "dayjs"
import { schedulesDay } from "../schedules/load.js"

const selectedDate = document.getElementById("date")

// Recarregar a lista de horários quando o input de dados mudar.
selectedDate.onchange = () => schedulesDay()