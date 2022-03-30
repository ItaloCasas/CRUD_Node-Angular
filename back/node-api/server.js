
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
    let val = new ValidationModule();
    let valid = val.isValid(req.query);
    if (valid.error) {
        return res.status(500).send(valid.error);
    }
    res.status(200).send("Removido com sucesso.");
});

// UPDATE
app.put('/api/alterar/:id', (req, res) => {});

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