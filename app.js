const express=require('express');
const handlebars=require('express-handlebars');
const app=express();
const port=3000;
const usuarios=require('./datos/usuarios')
/*npm install express-handlebars@6.0.6 debido a que glitch no anda sino */
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








/**
 * Agregar CORS
 * 
 * app.use(cors({
 *     origin:'http://localhost:3000'
 }))
 * 
 * 
 * 
 * 


 *     if(localStorage.getItem('imagen2')){
        let imagenesJson=JSON.parse(localStorage.getItem('imagen2'))
        for(let i=0;i<imagenesJson.length;i++){
            let div1 = document.createElement('div');
            let img=document.createElement('img');
            div1.id=imagenesJson[i].id;
            img.src=imagenesJson[i].link
            div1.appendChild(img);
            document.getElementById('galeria-Cumple').appendChild(div1);            
            
        }
    }







{{!-- function rederImg(arrayImagenes,galeriaId){
    let galeriaSele=document.getElementById(`${galeriaId}`)
    for(let i=0;i<arrayImagenes.length;i++){
        let div = document.createElement('div');
        let imgStorage=document.createElement('img')
        imgStorage.src=arrayImagenes[i].link
        div.id=arrayImagenes[i].id
        div.appendChild(imgStorage);
        galeriaSele.appendChild(div);
    }
}
if(localStorage!=null){
    rederImg(imagenesCumple,'galeria-Cumple')
    rederImg(imagenesBaby,'galeria-Baby')
    rederImg(imagenesCasamiento,'galeria-Cas')
} --}}







// Función para convertir Blob a Base64
function blobToBase64(blob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            resolve(reader.result);
        };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}

// Función para guardar una imagen en formato Blob como Base64
async function saveBlobAsBase64(key, blob, array) {
    try {
        const base64Data = await blobToBase64(blob);
        array.push({ id: id++, link: base64Data });
        localStorage.setItem(key, JSON.stringify(array));
    } catch (error) {
        console.error('Error al guardar la imagen:', error);
    }
}

// Función para cargar las imágenes desde el localStorage
function loadImages(key, array) {
    const storedData = localStorage.getItem(key);
    if (storedData) {
        const parsedData = JSON.parse(storedData);
        array.length = 0;
        array.push(...parsedData);
    }
}




























mi codigo 





<script>

    let imagenesCumple=[]
    let imagenesBaby=[]
    let imagenesCasamiento=[]
    let idCumple=1
    let idBaby=1
    let idCasamiento=1
    let id=1
    let imagenes=[]


function insertarImg(archJson,matrizElegida){

    if(archJson){
        let imgJson=JSON.parse(archJson)
        console.log(imgJson)
        matrizElegida.length = 0; // Limpia la matriz
        matrizElegida.push(imgJson);
        console.log('matrizElegida',matrizElegida);
    }else{
        matrizElegida.length=0
    }
}


insertarImg(localStorage.getItem('imgCumple'),imagenesCumple)
insertarImg(localStorage.getItem('imgBaby'),imagenesBaby)
insertarImg(localStorage.getItem('imgCas'),imagenesCasamiento)








    function agregarImg(galeriaId, inputId) {
        let input = document.getElementById(`${inputId}`);

        input.disabled = true;

        if(imagenes.length<9){
            input.disabled = false;
        // Obtener el valor actual de i
        i = imagenes.length + 1;
        console.log('imagenes',imagenes.length)
        if(imagenes.length<9){
            console.log('no debes entrar',imagenes.length)
        input.onchange = () => handleImageChange(input, galeriaId);
        }else{
            input.disabled = true;
            alert('No se pueden agregar mas imagenes')
        }
        }else {
        alert('No se pueden agregar más imágenes');
    }
    }
function selectGaleria(galeriaId,link){
    console.log('entro a selectGaleria',galeriaId)
    let nuevaImg={
        id,link
    }
    let imgParseado
    switch(galeriaId){
        case 'galeria-Cumple':
            nuevaImg = {
                    id: idCumple,
                    link: link
                };
            imagenesCumple.push(nuevaImg);

            imgParseado=JSON.stringify(imagenesCumple);
            localStorage.setItem('imgCumple',imgParseado);
            idCumple++
            break;
        case 'galeria-Baby':
            nuevaImg = {
                    id: idBaby,
                    link: link
                };
            imagenesBaby.push(nuevaImg);
            imgParseado=JSON.stringify(imagenesBaby);
            localStorage.setItem('imgBaby',imgParseado);
            idBaby++
            break;
        case 'galeria-Cas':
            nuevaImg = {
                    id: idCasamiento,
                    link: link
                };
        imagenesCasamiento.push(nuevaImg);
            imgParseado=JSON.stringify(imagenesCasamiento);
            localStorage.setItem('imgCas',imgParseado);
            idCasamiento++
            break;
        default:
            break;
    }
}







    function handleImageChange(input, galeriaId) {
        let galeria = document.getElementById(`${galeriaId}`);
        console.log('no debes entrar',imagenes.length)
            let div = document.createElement('div');
            // Desactivar el input para evitar cambios adicionales
            input.disabled = true;
            
            if (input.files && input.files[0]) {
                let img = document.createElement('img');
                let link = URL.createObjectURL(input.files[0]);
                
                
                
                selectGaleria(galeriaId,link);
                
                img.src = link;
                div.id = i;
                div.appendChild(img);
                div.classList.add('galeria2');
                galeria.appendChild(div);
                console.log('esto es i', i);
            }
            if(imagenes.length<9){
                input.disabled = true;
            }else{
            // Reactivar el input después de procesar la imagen
            input.disabled = false;

            }
            // Restablecer el valor del input para permitir la selección del mismo archivo nuevamente
            input.value = '';
            console.log('esta cambiando el input');
        }
    console.log(localStorage)
    function eliminarImg(galeriaId) {

        if (window.confirm('¿Desea eliminar la imagen?')) {
            let galeria2 = document.getElementById(`${galeriaId}`);
            let eliminarDiv = galeria2.lastElementChild;
            while (eliminarDiv && eliminarDiv.nodeType !== 1) {
                eliminarDiv = eliminarDiv.previousElementSibling;
            }
            if (eliminarDiv) {
                galeria2.removeChild(eliminarDiv);
            }
        }

    }
 
</script>










 */


