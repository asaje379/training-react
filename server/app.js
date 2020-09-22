const express=require('express');
const body_parser=require('body-parser');
const cors=require('cors');
const mySql=require('mysql');
const produitRouter=require('./routes/produit_route');
const app=express();

app.use(cors());
app.use(body_parser.json());
const con=mySql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    port:'3306',
    databases:'db_boutique'    
});
con.connect();
con.query('USE db_boutique',(err,data)=>{});
app.use('/produits',produitRouter(con));

module.exports=app;