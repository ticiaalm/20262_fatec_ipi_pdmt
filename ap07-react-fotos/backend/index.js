require('dotenv').config()
const axios = require('axios')
const express = require('express')
const app = express()
app.use(express.json())


app.get('/search', async (req, res) => {
    try {
        const query = req.query.query
        const chaveAPI = process.env.API_KEY
        console.log(`query: ${query}, chaveAPI: ${chaveAPI}`)
        const pexelsClient = axios.create({
            baseURL: 'https://api.pexels.com/v1/',
            headers: {
                Authorization: chaveAPI
            }
        })
        const resposta = await pexelsClient.get('/search', {
            params: {
                query: query
            }
        })
        const fotos = resposta.data.photos
        const colecao = resposta.data

        res.json({
            fotos: fotos,
            colecao: colecao
        })

    } catch(e) {}
    res.end()
})

const port = 3000
app.listen(port, () => console.log(`Server OK. Porta: ${port}.`))