const urlBase = `https://api-eshopcba.herokuapp.com/api`;

const requestApi = async ()=> {
    try {
        const queryParam = ``;
        const resultado = await fetch(urlBase + queryParam);
        const json = await resultado.json();
      console.log(json)
        return json;
    } catch (error) {
        console.log(error)
    }
}

