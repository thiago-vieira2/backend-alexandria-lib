import * as db from '../repository/livroRepository.js';
import { Router } from 'express';

const endpoints = Router();

endpoints.post('/adicionarLivro', async (req, res) => {
    try {
        const livro = req.body;

        if (!livro || !livro.nome_autor || !livro.nome) {
            return res.status(400).send({ error: 'Dados incompletos. Por favor, forneça nome e nome_autor.' });
        }

        const id = await db.AdicionarLivro(livro);

        res.status(201).send({ id });
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: 'Erro ao adicionar o livro. Tente novamente mais tarde.' });
    }
});

endpoints.get ('/PuxarLivros', async (req, res) => {
    try {
        const livro = await db.PuxarLivros()
        res.send (livro) 

    } catch (error) {
        console.error(error)
        res.status(500).send({error: "Erro ao puxar os livros"})
    }
})

endpoints.delete('/DeletarLivro/:id', async (req, res) => {
    try {
        const idLivro = req.params.id;
        console.log('ID recebido para deletar:', idLivro); 
      

        const linhasDeletadas = await db.DeletarLivro(idLivro);

        if (linhasDeletadas === 0) {
            return res.status(404).send({ error: 'Livro não encontrado' });
        }

        res.status(200).send({ message: 'Livro deletado com sucesso' });
    } catch (error) {
        console.error('Erro ao deletar livro:', error);
        res.status(500).send({ error: 'Erro ao deletar o livro' });
    }
});

endpoints.put ("/AlterarLivro/:id", async (req, res) => {
    try {
        const idLivro = req.params.id;
        let alterar= req.body
        console.log(alterar);

        let linhasAlteradas = await db.AlterarLivro(idLivro, alterar)

        if (linhasAlteradas == 0) {
            res.send ("nenhuma linha foi alterada")
        }

        else (res.send ("funfo"))
        
    } catch (error) {
        console.error('Erro ao deletar livro:', error);
        res.status(500).send({ error: 'Erro ao deletar o livro' });
    }
})

export default endpoints;
