export const getUser = async() => {

    return new Promise(( resolve , reject )=> {

        fetch("http://localhost:2006/api/usuarios")
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
