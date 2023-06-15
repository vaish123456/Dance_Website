const express=require("express");
const path =require('path');
const app=express();
const port=80;


//express specific stuff:-
app.use('/static',express.static('static'));
app.use(express.urlencoded())

//pug specific stuff:-
app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))

app.get('/',(req,response)=>{
    
    const params={ }
    response.status(200).render('home.pug',params);
})
app.get('/contact',(req,response)=>{
    
    const params={ }
    response.status(200).render('contact.pug',params);
})



app.listen(port,()=>{
    console.log(`This application started successfully on port  ${port}`);
});

