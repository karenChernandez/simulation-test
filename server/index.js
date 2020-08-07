require('dotenv').config()
const express = require('express');
const massive = require('massive');
const {CONNECTION_STRING} = process.env
const bootsCtrl = require('./../controllers/controller');
const app = express()
const port= 4005;
app.use(express.json())


massive({
    connectionString: CONNECTION_STRING,
    ssl:{rejectUnauthorized: false }
}).then(db => {
    app.set('db', db)
    // app.get('db').init()
    console.log('DATABASE CONNECTED!!')
}).catch(err=> console.log("Err connecting to DB/massive error!", err))

app.get('/api/boots', bootsCtrl.getBoots);
app.post('/api/boots', bootsCtrl.addBoots);
app.delete(`/api/boots/:id`, bootsCtrl.deleteBoots);

app.listen(port, () => console.log(`Server listening up on port: ${port}`))







    