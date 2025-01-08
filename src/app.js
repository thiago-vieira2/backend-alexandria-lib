import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import AdicionarRotas from './rotas.js'

const servidor = express()
servidor.use (cors())
servidor.use (express.json())

AdicionarRotas(servidor)



const PORTA = process.env.PORTA; 
servidor.listen (PORTA, () => console.log(`--> API Conectada na ${PORTA}`));
