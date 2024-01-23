const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Katcilane Silva',
        imagem:'https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png',
        minibio: 'Aspirante a dev e mamãe da Maya'
    },
    {
        nome: 'Mayumi Shingaki',
        imagem: 'https://media.licdn.com/dms/image/C4D03AQGsrbEtiM8FGg/profile-displayphoto-shrink_800_800/0/1639777217874?e=1711584000&v=beta&t=rEg6WkDdbdYbzW4hBwI8dmeuFOPmOYPTwtFeGo02gLE',
        minibio: 'Engenheira de Software @Itau | Pós graduanda em Engenharia de Software | Líder do Programa de Embaixadoras Universitárias e Conselheira @Womakerscode | Organizadora @NodeBr | Doc Advocate | AWS & Azure Cloud Certified'
    },
    {
        nome: 'Cristiane Damasceno',
        imagem: 'https://media.licdn.com/dms/image/C4E03AQFlkaqPDgT_7w/profile-displayphoto-shrink_800_800/0/1591830743588?e=1711584000&v=beta&t=XEXzNMgWK6U_Eli3glg7ZZ0vJGIa9zMwdmslkRWwNuw',
        minibio: 'Consultora de Desenvolvimento de Software na Thoughtworks | Java | Spring | Voluntária na WoMakersCode'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)