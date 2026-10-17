"use strict"       // MAIN CRIADO PARA IMPORTAR OS MÓDULOS

// Configuração do dayjs
import "./libs/dayjs.js"

// CSS
import "./styles/global.css"
import "./styles/form.css"
import "./styles/schedule.css"

import dayjs from "dayjs"
console.log(dayjs().format("DD/MM - HH:mm"))

import "./modules/form/submit.js"

import "./modules/load.js"