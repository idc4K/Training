const { response } = require('express');
const express = require('express');
require('dotenv').config({path : './config/.env'});
RoutesApp = require('./routes/app.routes');
const app = express();


//app.use(express.json());
//app.use(express.urlencoded({ extended: true }));
//app.use('/', RoutesApp);
app.get('/*', (req, res) => {
    res.send('Hello World')
  })
app.listen(process.env.PORT, () => {
    console.log(`start in port ${process.env.PORT}`);
})