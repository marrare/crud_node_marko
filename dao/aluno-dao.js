const mysql = require('mysql2');

class AlunoDao {

    constructor() {

        this._connection = mysql.createConnection({
            host: 'localhost',
            user: 'rivaldo',
            database: 'crud_node',
            password: 'MKO)nji9'
        })

        this._alunos = [
            { id: 1, nome: 'Josino', email: "josino@gmail.com", curso: 'ads' },
            { id: 2, nome: 'Maria', email: "maria@gmail.com", curso: 'qualidade' },
            { id: 3, nome: 'José', email: "jose@gmail.com", curso: 'ads' }
        ];
    }

    list() {
        return new Promise((resolve, reject) => {
            this._connection.query(`SELECT * FROM alunos`, (err, results) => {
                if(err) reject(err);
                else resolve(results);
            })
        })
    }

    save(aluno) {
        aluno.id = this._alunos.length+1;
        this._alunos.push(aluno);
    }

    update(aluno) {
        this.delete(aluno.id)
        this._alunos.push(aluno);
    }

    findById(id) {
        for(let aluno of this._alunos) {
            if(aluno.id == id) return aluno;
        }
        return null;
    }

    delete(id) {
        this._alunos = this._alunos.filter((aluno) => {
            return aluno.id != id;
        })
    }
}

module.exports = AlunoDao