const express = require("express"); //commonJS
const postsRouter = require("./router/postsRouter");
var cors = require('cors')
const options = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  }


const PORT = 5000;



const app = express();


//cu app.use se adauga un middleware
app.use(express.json()); // imi adauga req.body de tip JSON

// am ceva care la req imi adauga req.user
//asa se adauga o functie
app.get('/api/test',cors(options),(req,res)=>{
    res.send({express:'Send from Backend'});
    //la get,post,delete fac cu cors
});

//test
app.use((req, res, next) => {
  req.user = { name: "Adidasi Nike AF!",
  price: "500 lei" ,
  sellersName: "Radu"};
 
  next();
});


app.use("/api/v1", postsRouter);

// catch all error handler
app.use((err, req, res, next) => {
  res.status(err.statusCode || 400);
  res.send(err.message);
});

app.listen(PORT, () => {
    console.log('Serverul a pornit pe portul 5000');
});