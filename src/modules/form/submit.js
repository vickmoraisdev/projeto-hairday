import dayjs from "dayjs"

const form = document.querySelector('form')
const selectedDate = document.getElementById('date')

// Data atual para definir o input
const inputToday = dayjs(new Date()).format('YYYY-MM-DD')

// Carrega a data atual lá no formulário
selectedDate.value = inputToday
// Define a data (mín)ima, para não correr o risco de alguém agendar uma data que já passou
selectedDate.min = inputToday

form.onsubmit = (event) => {
    // Previne a página de recarregar ao enviar.
    event.preventDefault()
}