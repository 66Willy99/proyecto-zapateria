const obtenerZapatos = async() =>{
    
    try{
        const response= await fetch("https://api-zapatos-arq3.onrender.com/zapatos");
        const data = response.json();
        return data;
    }
    catch(error){
        console.log(`el error es ${error}`);
    }
}

obtenerZapatos()
.then((zapatos) =>{
    console.log(zapatos);
})
