

export const enviarZapato = (id,
    nombre,
    descripcion,
    img,
    modelo,
    precioReferencial,
    stock,
    detalles) =>{

        const rutaArchivoHTML = "http://127.0.0.1:5500/proyecto-zapateria/zapato.html";

        fetch(rutaArchivoHTML)
            .then(response => response.text())
            .then((html) => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');

                const nombreZapato= doc.getElementById("nombre");
                nombreZapato.textContent=nombre;

                const precioZapato=doc.getElementById("precio");
                precioZapato.textContent=precioReferencial;

                const descZapato=doc.getElementById("desc");
                descZapato.textContent=descripcion;

                for (const propiedad in detalles) {
                    const det1Zapato=doc.getElementById("detail-"+propiedad);
                    det1Zapato.textContent=`${propiedad}: ${detalles[propiedad]}`;
                    console.log(`${propiedad}: ${detalles[propiedad]}`);
                };

                const imgZapato=doc.getElementById("imgZapato");
                imgZapato.style.backgroundImage=`url(${img})`;
                

                const nuevoHTML= new XMLSerializer().serializeToString(doc);
                document.body.innerHTML = nuevoHTML;
            })

        
    }