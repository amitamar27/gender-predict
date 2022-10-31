const express = require('express')
const cors = require('cors')
const app = express()
const request = require('request')
const dotenv = require('dotenv')
dotenv.config()
app.use(cors())
app.use(express.json())
app.use(express.text())

app.post('/', async (req, res) => {
    if (!req.body || !req.body.name)
        return res.status(400).json({ error: "No name provided in body" })

    const params = new URLSearchParams()
    params.set("name", req.body.name)
    const query = params.toString()

    const genderUrl = `${process.env.GENDER_API_URL}?${query}`
    const nationUrl = `${process.env.NATION_API_URL}?${query}`

    request.get(genderUrl, { json: true }, (err, genderResponse) => {
        if (err)
            return res.status(500).json(err)
        request.get(nationUrl, { json: true }, (err, nationResponse) => {
            if (err)
                return res.status(500).json(err)
            nationResponse.body.country = nationResponse.body.country[0]
            return res.status(200).json({
                genderResponse: genderResponse.body,
                nationResponse: nationResponse.body
            })
        })
    })
})

app.listen(5001, () => {
    console.log("Listening on port 5001")
})