const express =require('express');
var bodyParser = require('body-parser');
const cors = require('cors');   

const app = express();
const port = process.env.PORT || 3000;

const corsOptions={
    origin:'*',
    credentials:true,                          //access-control-allow-credentials:true
    optionsSuccessStatus:200                 //allows to return 200 status code
};

app.use(bodyParser.urlencoded({extended:false}));

// parse application/json
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors(corsOptions));
app.use(express.json());

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

app.get('/',(req,res)=>{
    console.log("Welocme to IxDA");
    res.status(200).send("Welcome to IxDA");
});

app.post('/formData',(req,res)=>{
    console.log(req.body);
    res.status(200).send({
        "message":"Success",
        data:req.body,
    })
});

// GET AND POST REQUEST

// GET REQUEST SENDS THE REQUEST TO THE SERVER BY TAKING PARAMS THROUGH THE URL
// POST REQUEST SEND THE PARAMS THROUGH THE BODY

//APPLICATION USER INTERFACE


//REST API  --> RESTFUL APPLICATION INTERFACE
//EXPRESS --> MIDDLEWARE FOR REST API   
// https://xyz.com/

//post (create)  --> insert new record in the database
//get  (read)    --> fetch the record from the database
//patch (update user)  --> update the record in the database
//delete (delete user)  --> delelte the record from the database

//CRUD OPERATIONS  ( CREATE READ UPDATE DELETE)
//AUTHORUIZATION
//AUTHENTICATION
//PAGINATION
//FILTERING
//SORTING

//DATABASES
//SQL--(TABLE FORMAT)                NoSQL--(COLLECTION FORMAT)
//ORM   SERVER--CONNECTS--DATABASE    (MONGOdb --->Mongoose)
//ORM   SERVER--CONNECTS--DATABASE    (POSTGRESql--->Sequelize,PG)