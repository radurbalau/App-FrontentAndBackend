const express = require("express");
const booksModel = require("../database/database");


const router = express.Router();
//get all or query about author
router.get("/", (req, res, next) => {
    const eq = req.query.author;
    //cand e string se duce pe query

        //daca autor e gol
        if(!!eq !== !!null || !!eq !== !!undefined){
            try{
                res.json(booksModel.getFromDbByAuthor(eq));
            }catch(err){
                res.status(404);//not found
                res.json({error: err.message});
            }
        }else{
            try{
                res.json(booksModel.getAllFromDb());
                //res.json({message: 'showed all books from database'});
                return;
            }catch(err){
                res.status(404);//not found
                res.json({error: err.message});
            }
        }
});

//get by id
router.get("/:id", (req, res, next) => {
    try{
        //console.log(req);
        const {id} = req.params; //const id = req.params.id
        const book = booksModel.getFromDbById(id);
        res.json(book);
    }catch(err){
        const {id} = req.params;
        if(err.message===`The object with the id = ${id} does not exists!`){
            res.status(404);//not found
            res.json({error: err.message});
            return;
             //sa fie o sg eroare aruncata
        }
        
        res.status(500).end();
    }
    
});

//get by name
router.get("/names", (req, res, next) => {
    try{
        //console.log(req);
        const {name} = req.params; //const id = req.params.id
        const book = booksModel.getFromDbById(id);
        
        res.json(book);
    }catch(err){
        const {name} = req.params;
        if(err.message===`The object with the name = ${name} does not exists!`){
            res.status(404);//not found
            res.json({error: err.message});
            return;
             //sa fie o sg eroare aruncata
        }
        
        res.status(500).end();
    }
});


//add
router.post('/',(req,res)=>{
    console.log('add');
    const item = {
        sellersName: req.body.sellersName,
        productName: req.body.productName,
        price: req.body.price
    };

    try{
        console.log('Inserted')

        booksModel.insertIntoDb(item);
        res.json({message: `${item.sellersName} added`}).status(201);
        //res.status(201).json(item);
    }catch(err) {
        console.log(err);
    }
});


//delete by a query about name or purge database
router.delete('/delete',(req,res)=>{
    console.log('Deleted');
    try{
        const author =  req.query.author;
        if(!!author !== !!null){
            booksModel.removeFromDbByAuthor(author);
            res.send('deleted by given author');
        }
        else{
            booksModel.purgeDb();
            res.send('purged database')
        }
    }catch(err){
        res.status(404);//not found
        res.json({error: err.message});
    }
});






module.exports = router;