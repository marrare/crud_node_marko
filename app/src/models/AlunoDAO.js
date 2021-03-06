
class AlunoDAO {

    constructor(connection) {
        this._connection = connection;
    }

    list() {
        return new Promise((resolve, reject) => {
            this._connection.query(`SELECT * FROM alunos`, 
            (err, results) => {
                if(err) reject(err);
                else resolve(results);
            })
        })
    }

    save(aluno) {
        return new Promise((resolve, reject) => {
            this._connection.query(`INSERT INTO alunos(nome,email,curso) VALUES(?,?,?)`, [aluno.nome, aluno.email, aluno.curso], 
            (err, results) => {
                if(err) reject(err);
                else resolve(results);
            })
        })
    }

    update(aluno) {
        return new Promise((resolve, reject) => {
            this._connection.query(`UPDATE alunos SET nome=?, email=?, curso=? WHERE id = ?;`, [aluno.nome, aluno.email, aluno.curso, aluno.id], 
            (err, results) => {
                if(err) reject(err);
                else resolve(results);
            })
        })
    }

    findById(id) {
        return new Promise((resolve, reject) => {
            this._connection.query(`SELECT * FROM alunos WHERE id = ?`, [id], 
            (err, results) => {
                if(err) reject(err);
                else resolve(results);
            })
        })
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            this._connection.query(`DELETE FROM alunos WHERE id = ?`, [id], 
            (err, results) => {
                if(err) reject(err);
                else resolve(results);
            })
        })
    }
}

module.exports = () => {
    return AlunoDAO;
}