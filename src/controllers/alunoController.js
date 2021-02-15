module.exports = (app) => {

    const AlunoController = {
        listarAlunoPagina: (req, res) => {
            let response = {
                error_messages: req.flash('error'),
                success_messages: req.flash('success'),
                results: []
            }

            const connection = app.config.dbConnection();
            const AlunoDAO = new app.src.models.AlunoDAO(connection);
        
            AlunoDAO.list().then((result) => {
                connection.end();
                response.results = result;
                res.marko(require('../../templates/alunos.marko'), response);
            }).catch(err => {
                connection.end();
                console.log(err);
                response.error_messages.push("Aconteceu algum erro");
                res.marko(require('../../templates/alunos.marko'), response);
            })
        },

        formAlunoPagina: (req, res) => {
            const id = req.params.id;
            
            if(id) {
                const connection = app.config.dbConnection();
                const AlunoDAO = new app.src.models.AlunoDAO(connection);

                AlunoDAO.findById(id).then((result) => {
                    connection.end();
                    if(result.length > 0) {
                        res.marko(require('../../templates/form.marko'), result[0]);
                    } else {
                        req.flash("error",`Não foi encontrado aluno com id = ${id}`);
                        res.redirect("/");
                    }
                }).catch(err => {
                    connection.end();
                    console.log(err);
                    req.flash("error","Não é possível editar usuário");
                    res.redirect("/");
                })
            } else {
                res.marko(require('../../templates/form.marko'));
            }
        },

        saveAluno: (req, res) => {
            const aluno = req.body;

            const connection = app.config.dbConnection();
            const AlunoDAO = new app.src.models.AlunoDAO(connection);

            if(aluno.id) {
                AlunoDAO.update(aluno).then((result) => {
                    connection.end();
                    req.flash("success","Atualização feita com sucesso.");
                    res.redirect("/");
                }).catch( err => {
                    connection.end();
                    console.log(err);
                    req.flash("error","Erro ao tentar atualizar os dados do aluno.");
                    res.redirect("/");
                })
            } else {
                AlunoDAO.save(aluno).then((result) => {
                    connection.end();
                    req.flash("success","Aluno salvo com sucesso.");
                    res.redirect("/");
                }).catch(err => {
                    connection.end();
                    console.log(err);
                    req.flash("error","Erro ao tentar salvar os dados do aluno.");
                    res.redirect("/");
                })
            }
        },

        deleteAluno: (req, res) => {
            const id = req.params.id;

            const connection = app.config.dbConnection();
            const AlunoDAO = new app.src.models.AlunoDAO(connection);

            AlunoDAO.delete(id).then((result) => {
                connection.end();
                req.flash("success","Aluno deletado com sucesso.");
                res.redirect("/");
            }).catch( err => {
                connection.end();
                console.log(err);
                req.flash("error","Erro ao tentar deletar os dados do aluno.");
                res.redirect("/");
            })
        },
    };

    return AlunoController;
}