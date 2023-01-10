const express = require('express');
const toConnectDatabase = require('./db');
const cors = require('cors');
const env = require('dotenv');

const app = express();

env.config();

toConnectDatabase();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send('Welcome to the express server');
})

app.use('/auth/user' , require('./Routes/UserRoutes'));
app.use('/auth/book' , require('./Routes/BookRoutes'));

app.listen(port , ()=>{
    console.log('listening on port ' + port);
});