const obtenerZapatos = async() =>{
    try{
        const response= await fetch("http://127.0.0.1:2006/api/zapatos");
        const data = response.json;
        return data;
    }
    catch(error){
        console.log(`el error es ${error}`);
    }
}

obtenerZapatos()
.then((zapatos) =>{
    console.log(zapatos.id) ;
})
