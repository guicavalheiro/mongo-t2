const express = require('express');
require('dotenv').config();

const bodyParser = require('body-parser');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', (req, res) => {

    res.send('ok')

})

require('./controller/authController')(app);

app.listen(process.env.PORT || 3000);