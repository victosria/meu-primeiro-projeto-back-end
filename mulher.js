const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
 response.json({
        nome: 'Victoria Masiero',
        imagem: 'https://pbs.twimg.com/media/F8afv1SWAAAkWlG?format=jpg&name=large',
        minibio: 'sou linda e to tentando fazer algo',
    })
}

function mostraPorta() {
    console.log("servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)