const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
      nome: 'Victoria Masiero',
      imagem: 'https://pbs.twimg.com/media/F8afv1SWAAAkWlG?format=jpg&name=large',
      minibio: 'linda e fingindo q sei oq to fazendo',
    },
   
    {
      nome: 'Luiza Godoi',
      imagem: 'https://pbs.twimg.com/media/F7ykd7lWsAAVnqT?format=jpg&name=large',
      minibio: 'minha melhor amiga e geografa',
    },
   
    {
      nome: 'Renata Leal',
      imagem: 'https://pbs.twimg.com/media/F4LlF8bXoAAbVt4?format=jpg&name=900x900',
      minibio: 'dev e odeia caucasianas sem nocao',
    }
   ]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)