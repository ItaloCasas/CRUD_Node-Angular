
const express = require('express');
const app = express();

const FileModule = require("./modules/file");
const ValidationModule = require("./modules/validation")

app.use(express.json());

const port = process.env.PORT || 8080;
app.listen(port, () => console.log('listening port: '+port));

// READ LISTA
app.get('/api/veiculos', (req, res) => {
    try {
        f.arquivoToJson().then((obj) => {
            return !obj ? 
                res.status(500).send("Erro ao ler arquivo de veículos") :
                res.status(200).send(obj);
        });
    } catch(e) {
        res.status(500).send(e);
    }
});

// READ INDIVIDUAL
app.get('/api/veiculo/:id', (req, res) => {
    try {
        let f = new FileModule();
        f.arquivoToJson().then((obj) => {
            return !obj ? 
                res.status(500).send("Erro ao ler arquivo de veículos") :
                res.status(200).send(obj.find(v => parseInt(v.id) === parseInt(req.params.id)));
        });
    } catch(e) {
        res.status(500).send(e);
    }
});

// INSERT
app.post('/api/inserir', (req, res) => {
    try {
        let val = new ValidationModule();
        let valid = val.isValid(req.query);
        if (valid.error) {
            return res.status(500).send(valid.error.details[0].message);
        }

        let f = new FileModule();
        f.adicionarArquivo(req.query).then(e => {
            if (e) {
                res.status(500).send("Erro ao inserir no arquivo.");
            }
            res.status(200).send("Registro inserido no arquivo.");
        })

    } catch(e) {
        console.log(e);
    }
});

// UPDATE
app.put('/api/alterar/:id', (req, res) => {
    try {
        let val = new ValidationModule();
        let valid = val.isValid(req.query);
        if (valid.error) {
            return res.status(500).send(valid.error.details[0].message);
        }

        let f = new FileModule();
        f.updateArquivo(req.params.id, req.query).then( e => {
                console.log(e);
                e ? res.status(200).send("Alterações feitas com sucesso") : res.status(500).send("Não foram feitas alterações");
            }
        );
    } catch(e) {
        console.log(e);
    }
});

// DELETE
app.delete('/api/remover/:id', (req, res) => {
    let f = new FileModule();
    f.removeFromArquivo(req.params.id).then((obj) => {
        console.log(obj);
        return !obj ? 
            res.status(500).send("Erro ao remover do arquivo.") :
            res.status(200).send("Removido com sucesso.");
    });
});