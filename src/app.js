import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import rotas from './rotas.js' 

const servidor = express()
servidor.use (cors())
servidor.use (express.json())



const PORTA = process.env.PORTA; 
servidor.listen (PORTA, () => console.log("API SUBIU"));
