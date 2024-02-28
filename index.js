const app= require('express')();

const  PORT = 8080;

app.listen( 
    PORT,
    () => console.log(`server is running on ${PORT}`)
);

app.get('/getRequest', (req,res)=>{
    res.send("se ha hecho la conexión satisfactoriamente")
});

app.post('/postRequest', (req,res)=>{
    res.send("Ángel Emmanuel Cerda Reyna, 20974, 5A")
});