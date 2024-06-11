export const getUser = async() => {

    return new Promise(( resolve , reject )=> {

        fetch("http://localhost:3001/usuarios")
            .then((response)=> {
                
                if(!response.ok){
                    throw new Error(`Error`);
                }

                return response.json();
            })
            .then((data)=> {
                resolve(data);
            })
            .catch(( error )=> {
                reject(error);
            })
    });
}
