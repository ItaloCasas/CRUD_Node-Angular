const fs = require("fs");
const csv = require("csvtojson");

const filePath = './dados/veiculos.csv';
const fileHeader = 'id,placa,chassi,renavam,modelo,marca,ano\n';

class FileModule {
    constructor() {}
    
    objToLine() {}

    // CRIA ARQUIVO CASO NAO EXISTA
    async verificaArquivo() {
        try {
            return fs.access(filePath, fs.F_OK, (err) => {
                if (err) {
                    if (err.errno != -4058) { // ARQUIVO INEXISTENTE
                        console.error(err);
                    }
                    fs.writeFile(filePath, fileHeader, e => console.log(e ? e : "Arquivo criado."))
                }
            });
        } catch (e) {
            console.log('Erro na verificação do arquivo.');
            console.log(e);
        }
    }

    async arquivoToJson() {
        try {
            return this.verificaArquivo().then(e => { return csv().fromFile(filePath) });
        } catch (e) {
            console.log('Erro na conversão do arquivo para JSON.');
            console.log(e)
        }
    }

    async adicionarArquivo(data) {
        return this.arquivoToJson().then(json => {
            let obj = [json.length+1].concat(Object.values(data));
            fs.appendFile(filePath, obj.join(',').concat('\r\n'), e => console.log(e));
        })
    }

    async removeFromArquivo(id) {
        try {
            return this.arquivoToJson().then(json => {
                let nList = json.filter(obj => parseInt(obj.id) !== parseInt(id));
                let nl1 = nList.map(i => i = Object.values(i).join(','));
                fs.writeFile(filePath, fileHeader.concat(nl1.join('\r\n')), e => console.log(e));
                return nList.length < json.length;
            });
        } catch (e) {
            console.log('Erro na conversão do arquivo para JSON.');
            console.log(e)
        }
    }

    async updateArquivo(id, data) {
        try {
            return this.arquivoToJson().then((json, i) => {
                let changed = false;
                let w = fileHeader;
                json.forEach(v => { 
                    if (parseInt(id) === parseInt(v.id)) { 
                        w = w.concat(id)
                            .concat(',')
                            .concat(Object.values(data).join(',')
                            .concat('\r\n'));
                        changed = true;
                    } else {
                        w = w.concat(Object.values(v).join(',').concat('\r\n'));    
                    }
                    console.log('----------');
                    console.log(w);
                });
                console.log(w);
                fs.writeFile(filePath, w, e => console.log(e));
                return changed;
            });
        } catch (e) {
            console.log('Erro na conversão do arquivo para JSON.');
            console.log(e)
        }
    }
  }
  module.exports = FileModule; 