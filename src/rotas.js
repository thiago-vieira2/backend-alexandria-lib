// rotas.js
import  LivrosController  from './controller/livrosController.js';

export default function AdicionarRotas(servidor) {
    servidor.use('/livros', LivrosController); // Usa o roteador no caminho /livros
}
