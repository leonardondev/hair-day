import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";
import { hoursClick } from "./hours-click.js";

const hours = document.getElementById("hours")

export function hoursLoad({ date }) {
  // Limpa a lista de horários
  hours.innerHTML = ""

  const opening = openingHours.map(hour => {
    // Recuperar somente a hora
    const [scheduleHour] = hour.split(":")

    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())

    return {
      hour,
      available: !isHourPast
    }
  })

  
  let datasetPeriod = ""
  opening.forEach(({ hour, available })=> {
    const li = document.createElement("li")
    
    if(hour === "09:00") {
      hourHeaderAdd("morning")
      datasetPeriod = "morning"
    }
    else if(hour === "13:00") {
      hourHeaderAdd("afternoon")
      datasetPeriod = "afternoon"
    }
    else if(hour === "19:00") {
      hourHeaderAdd("night")
      datasetPeriod = "night"
    }

    li.classList.add("hour")
    li.classList.add(available ? "hour-available" : "hour-unavailable")
    li.dataset.period = datasetPeriod;
    li.textContent = hour
    
    hours.append(li)
  })

  hoursClick()
}

function hourHeaderAdd(period) {
  const PERIOD_TITLE = {
    morning: "Manhã",
    afternoon: "Tarde",
    night: "Noite"
  }

  const header = document.createElement("li")
  header.classList.add("hour-period")
  header.textContent = PERIOD_TITLE[period]
  header.dataset.period = period

  hours.append(header)
}