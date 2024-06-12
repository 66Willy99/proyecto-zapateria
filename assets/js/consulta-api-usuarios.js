export const obtenerUser = async() => {
    try {
        const response = await fetch("http://localhost:3001/users");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(`el error es ${error}`);
    }
};

export const Registro = async(newUser) => {
    try {
        const response = await fetch('http://localhost:3001/users/add', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: newUser,
        });

        if (!response.ok) {
          throw new Error(`Error adding user: ${response.statusText}`);
        }

        const addedUser = await response.json();

        const rutaArchivoHTML = "../index.html";

        fetch(rutaArchivoHTML)
        .then((response) => {
            return response.text()
        })
        .then((html)=> {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html,"text/html");
            const loginBtn = doc.getElementById("BtnLogin");
            loginBtn.textContent = 'a';

            const nuevoHTML = new XMLSerializer().serializeToString(doc);
            document.body.innerHTML = nuevoHTML;
            return document.body.innerHTML;
        }
        )
        return addedUser;

    }catch (error) {
        console.error('Error:', error);
        messageElement.textContent = `An error occurred: ${error.message}`;
      }
}
