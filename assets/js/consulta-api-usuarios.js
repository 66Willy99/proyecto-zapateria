export const obtenerUser = async() => {
    try {
        const response = await fetch("http://localhost:3001/users");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(`el error es ${error}`);
    }
};