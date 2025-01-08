import con from './connection.js'

export async function AdicionarLivro(Livro) {
    const comando = `
        insert into livros (nome_autor, nome, genero, paginas) values (?,?,?,?)
    `
    let resp = await con.query(comando, [Livro.nome_autor, Livro.nome, Livro.genero, Livro.paginas])
    let cadastro = resp[0]

    return cadastro.insertId;
}

export async function PuxarLivros() {
    const comando = `
        select * from livros;
    `

    let resp = await con.query(comando)
    let cadastro = resp
    return cadastro

}



export async function DeletarLivro(idLivro) {
    const comando = `
        DELETE FROM livros WHERE id_livros = ?;
    `; // Certifique-se de que o comando não está vazio

    try {
        console.log('Comando SQL:', comando); 
        console.log('Parâmetro enviado:', idLivro);

        const [result] = await con.query(comando, [idLivro]);
        return result.affectedRows;
    } catch (err) {
        console.error('Erro ao executar comando SQL:', err);
        throw new Error('Erro ao deletar livro');
    }
}

export async function AlterarLivro(idlivro, alterar) {
    const comando = `

        update livros 
        set nome_autor = ?, nome = ?, genero = ?, paginas = ? 
        where id_livros = ?;
    
    `

    try {
        const [result] = await con.query (comando, [alterar.nome_autor, alterar.nome, alterar.genero, alterar.paginas, idlivro])
        return result.affectedRows;

    } catch (error) {
        console.error ('deu bobo' + error)

    }
}
