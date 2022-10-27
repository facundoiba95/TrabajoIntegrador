const urlBase = `http://localhost:3000/api`;

const requestApi = async ()=> {
    try {
        const resultado = await fetch(urlBase);
        const json = await resultado.json();
        console.log(json)
        return json;
        
    } catch (error) {
        console.log(error)
    }
}

