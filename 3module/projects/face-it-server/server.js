const express = require('express');
const cors = require("cors");
const app = express();
const makeupData = require('./makeupData.js');

app.locals.makeup = makeupData;

app.use(express.json());
app.use(cors());

app.set('port', 3001)
app.listen(app.get('port'), () => {
    console.log(`Now listening on port ${app.get('port')}!`)
})

app.get('/api/v1/makeup', (request, response) => {
    response.status(200).json(app.locals.makeup)
})

