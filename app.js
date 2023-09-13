const express=require('express');
const handlebars=require('express-handlebars');
const app=express();
const port=3000;
const usuarios=require('./datos/usuarios')
app.engine('.hbs',handlebars.engine({extname:'.hbs',defaultLayout:'main.hbs'}));
app.set('view engine','hbs');
app.set('views','./views');

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static('public'));



app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/login.html');
})
// app.get('/administrar',(req,res)=>{
//     window.confirm('desea ir a la pagina de administrador')
//     if(window.confirm('desea ir a la pagina de administrador')){
//         res.redirect('/login');
//     }else{
//         res.redirect('/home');
//     }
// })
app.get('/home',(req,res)=>{
    res.render('home');
})
app.get('/galeria',(req,res)=>{
    res.render('galeria');
})
app.get('/nosotros',(req,res)=>{
    res.render('nosotros');
})
app.get('/formulario',(req,res)=>{
    res.render('formulario');
})



app.post('/validar', (req, res) => {
    let contador=0
    const { usuario, password } = req.body;
    console.log(usuario, password);
    usuarios.forEach((user) => {
        console.log(user.nombre)
        contador++
        console.log(user.password)
        console.log(contador, usuarios.length)
        if (usuario == user.nombre && password == user.password) {
            res.redirect('/home');
        } else if(contador==usuarios.length) {
            res.redirect('/login');
            console.log(contador,usuarios.length)           
        }
    })
})





app.listen(port,()=>{
    console.log(`Servidor corriendo en el puerto http://localhost:${port}`);
})











