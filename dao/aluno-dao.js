class AlunoDao {

    constructor() {
        this._alunos = [
            { id: 1, nome: 'Josino', curso: 'ADS' },
            { id: 2, nome: 'Maria', curso: 'Gestão de Qualidade' },
            { id: 3, nome: 'José', curso: 'ADS' }
        ];
    }

    list() {
        return this._alunos;
    }

    save(aluno) {
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