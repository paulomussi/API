import express, {json} from 'express'

const app = express()
app.use(express.json())

const users = []

app.post('/usuarios', (req,res)=> {

    users.push(req.body)

    res.status(201).json(req.body)
    
    console.log();
    
})

app.get('/usuarios', (req, res) => {

    res.status(200).json(users)

})

app.listen(3000)

/*
    Criar nossa API de Usuários

    -Criar um usuário
    -Listar todos os usuários
    -Editar um usuários 
    -Deletar um usuários
*/

/*
    1- Tipo de Rota / Método HTTP
*/