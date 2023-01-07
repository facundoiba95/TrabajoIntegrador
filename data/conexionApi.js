const urlBase = `https://eshopcba-api-production.up.railway.app/api`;

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

