const express = require('express')
const cors = require('cors');

const app = express()
app.use(cors());
const port = 8000



const cardsData = [
    {
        id: 1,
        name: 'name'
    },
]


app.get('/cards', (req, res) => {
    const page = req.query.page
    console.log(page)   
    res.send(cardsData);
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})