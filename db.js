const mongoose = require('mongoose');

const toConnectDatabase = ()=>{

    mongoose.connect(`mongodb+srv://mern-chat:${process.env.DB_PASS}@cluster0.s4khifz.mongodb.net/mylibrarydata?retryWrites=true&w=majority`).then(()=>console.log('connected to database'))
    .catch(e=>{
        console.log("error connecting to database");
        console.log(e)
    });

}
module.exports = toConnectDatabase;