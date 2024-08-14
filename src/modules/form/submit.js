import dayjs from "dayjs"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

const inputToday = dayjs().format("YYYY-MM-DD")

selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = (event) => {
  event.preventDefault();
  
  try {
    // Recuperando o nome do cliente.
    const name = clientName.value.trim()
    if(!name) {
      return alert("Informe o nome do cliente!")
    }
    
    // Recuperando o horário selecionado.
    const hourSelected = document.querySelector(".hour-selected")
    if(!hourSelected) {
      return alert("Selecione a hora!")
    }

    // Recuperar somente a hora
    const [hour] = hourSelected.innerText.split(":")
    console.log(hour);

    //Inserir a hora na data
    const when = dayjs(selectedDate.value).add(hour, "hour")

    // Gerar um ID
    const id = Date.now()

    console.log({
      id, name, when
    });

    
  } catch (error) {
    console.log(error)
    return alert("Não foi possível realizar o agendamento.")
  }
}