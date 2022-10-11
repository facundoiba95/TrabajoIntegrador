const offsale = document.querySelector('.offsale-products');
const celulares = document.getElementById('celulares')
const tablets = document.getElementById('tablets')
const headsets = document.getElementById('headsets')
const netbooks = document.getElementById('netbooks')

//FUNCIONES PARA MOSTRAR PRODUCTOS OFFSALE
const createHTMLoffSaleproducts = (array) => {
    return `
    <li class="offsale-item"><a href="#" class="offsale-link">
    <img src="${array.smartphones[1].samsung[0].image}" alt="samsung a50">
    <h4>${array.smartphones[1].samsung[0].name}</h4>
    <p class="priceold">$ 84.000</p>
    <p><b>$ ${array.smartphones[1].samsung[0].price}</b></p>

</a></li>
<li class="offsale-item"><a href="#" class="offsale-link">
    <img src="${array.smartphones[0].iphone[6].image}" alt="iphone 11">
    <h4>${array.smartphones[0].iphone[6].name}</h4>
    <p class="priceold">$ 290.000</p>
    <p><b>$ ${array.smartphones[0].iphone[6].price}</b></p>

</a></li>
<li class="offsale-item"><a href="#" class="offsale-link">
    <img src="${array.tablets[0].iPad[1].image}" alt="">
    <h4>${array.tablets[0].iPad[1].name}</h4>
    <p class="priceold">$ 314.000</p>
    <p><b>$ ${array.tablets[0].iPad[1].price}</b></p>

</a></li>
<li class="offsale-item"><a href="#" class="offsale-link">
    <img src="${array.notebooks[1].lenovo[0].image}" alt="">
    <h4>${array.notebooks[1].lenovo[0].name}</h4>
    <p class="priceold">$ 203.000</p>
    <p><b>$ ${array.notebooks[1].lenovo[0].price}</b></p>

</a></li>
    `
}
const rendercreateHTMLoffSaleProducts = (array) => {
    return offsale.innerHTML = createHTMLoffSaleproducts(array)
}
///////////////////


//FUNCIONES PARA MOSTRAR CELULARES
const createHTMLcelulares = array => {
    return `
    <h3 class="title-products">Celulares</h3>
            <ul class="gallery-products">
                <li class="gallery-item"><a href="#" class="gallery-link">
                    <img src="${array.smartphones[0].iphone[0].image}" alt="Imagen Iphone 12 pro max">
                    <div class="description-product">
                        <h4 class="name-product">${array.smartphones[0].iphone[0].name}</h4>
                        <p><b>$ ${array.smartphones[0].iphone[0].price}</b></p>
                        <h5>Envio gratis</h5>
                    </div>
                </a></li>
                <li class="gallery-item"><a href="#" class="gallery-link">
                    <img src="${array.smartphones[0].iphone[1].image}" alt="Imagen Iphone 12 pro max">
                    <div class="description-product">
                        <h4 class="name-product">${array.smartphones[0].iphone[1].name} </h4>
                        <p><b>$ ${array.smartphones[0].iphone[1].price} </b></p>
                        <h5>Envio gratis</h5>
                    </div>
                </a></li>
                <li class="gallery-item"><a href="#" class="gallery-link">
                    <img src="${array.smartphones[0].iphone[2].image}" alt="Imagen Iphone 12 pro max">
                    <div class="description-product">
                        <h4 class="name-product">${array.smartphones[0].iphone[2].name}</h4>
                        <p><b>$ ${array.smartphones[0].iphone[2].price}</b></p>
                        <h5>Envio gratis</h5>
                    </div>
                </a></li>
                <li class="gallery-item"><a href="#" class="gallery-link">
                    <img src="${array.smartphones[0].iphone[5].image}" alt="Imagen Iphone 12 pro max">
                    <div class="description-product">
                        <h4 class="name-product">${array.smartphones[0].iphone[5].name}</h4>
                        <p><b>$ ${array.smartphones[0].iphone[5].price}</b></p>
                        <h5>Envio gratis</h5>
                    </div>
                </a></li>
                <li class="gallery-item mas"><a href="#" class="gallery-link">
                    <a href="#">Ver Más</a>
                </a></li>
            </ul>
    `
}
const rendercreateHTMLcelulares = array => {
    return celulares.innerHTML = createHTMLcelulares(array)
}
/////////////////////////////


//FUNCION PARA MOSTRAR TABLETS
const createHTMLtablet = array => {
    return `
    <h3 class="title-products">Tablets</h3>
            <ul class="gallery-products">
                <li class="gallery-item"><a href="#" class="gallery-link">
                    <img src="${array.tablets[0].iPad[0].image}" alt="Imagen Iphone 12 pro max">
                    <div class="description-product">
                        <h4 class="name-product">${array.tablets[0].iPad[0].name}</h4>
                        <p><b>$ ${array.tablets[0].iPad[0].price}</b></p>
                        <h5>Envio gratis</h5>
                    </div>
                
                </a></li>
                <li class="gallery-item"><a href="#" class="gallery-link">
                    <img src="${array.tablets[1].samsung[0].image}" alt="Imagen Iphone 12 pro max">
                    <div class="description-product">
                        <h4 class="name-product">${array.tablets[1].samsung[0].name}</h4>
                        <p><b>$ ${array.tablets[1].samsung[0].price}</b></p>
                        <h5>Envio gratis</h5>
                    </div>
                
                </a></li>
                <li class="gallery-item mas"><a href="#" class="gallery-link">
                    <a href="#">Ver Más</a>
                </a></li>
            </ul>
    `
}
const renderCreateHTMLtablet = array => {
    tablets.innerHTML = createHTMLtablet(array);
}
/////////////////////////////////////


// FUNCIONES PARA MOSTRAR HEADSETS
const createHTMLheadsets = array => {
    return `
    <h3 class="title-products">Headsets</h3>
            <ul class="gallery-products">
                <li class="gallery-item"><a href="#" class="gallery-link">
                    <img src="${array.headsets[0].AKG[0].image}" alt="Imagen Iphone 12 pro max">
                    <div class="description-product">
                        <h4 class="name-product">${array.headsets[0].AKG[0].name}</h4>
                        <p><b>$ ${array.headsets[0].AKG[0].price}</b></p>
                        <h5>Envio gratis</h5>
                    </div>
                
                </a></li>
                <li class="gallery-item"><a href="#" class="gallery-link">
                    <img src="${array.headsets[1].corsair[0].image}" alt="Imagen Iphone 12 pro max">
                    <div class="description-product">
                        <h4 class="name-product">${array.headsets[1].corsair[0].name}</h4>
                        <p><b>$ ${array.headsets[1].corsair[0].price}</b></p>
                        <h5>Envio gratis</h5>
                    </div>
                
                </a></li>
                <li class="gallery-item mas"><a href="#" class="gallery-link">
                    <a href="#">Ver Más</a>
                </a></li>
            </ul>
    `
}
const rendercreateHTMLheadsets = array => {
    return headsets.innerHTML = createHTMLheadsets(array)
}
/////////////////////////////////////


//FUNCIONES PARA MOSTRAR NOTEBOOKS
const createHTMLnotebooks = array => {
    return `
    <h3 class="title-products">Notebooks</h3>
            <ul class="gallery-products">
                <li class="gallery-item"><a href="#" class="gallery-link">
                    <img src="${array.notebooks[0].asus[0].image}" alt="Imagen Iphone 12 pro max">
                    <div class="description-product">
                        <h4 class="name-product">${array.notebooks[0].asus[0].name}</h4>
                        <p><b>$ ${array.notebooks[0].asus[0].price}</b></p>
                        <h5>Envio gratis</h5>
                    </div>
                
                </a></li>
                <li class="gallery-item"><a href="#" class="gallery-link">
                    <img src="${array.notebooks[1].lenovo[1].image}" alt="Imagen Iphone 12 pro max">
                    <div class="description-product">
                        <h4 class="name-product">${array.notebooks[1].lenovo[0].name}</h4>
                        <p><b>$ ${array.notebooks[1].lenovo[1].price}</b></p>
                        <h5>Envio gratis</h5>
                    </div>
                
                </a></li>
                <li class="gallery-item"><a href="#" class="gallery-link">
                    <img src="${array.notebooks[2].razer[0].image}" alt="Imagen Iphone 12 pro max">
                    <div class="description-product">
                        <h4 class="name-product">${array.notebooks[2].razer[0].name}</h4>
                        <p><b>$ ${array.notebooks[2].razer[0].price}</b></p>
                        <h5>Envio gratis</h5>
                    </div>
                
                </a></li>
                <li class="gallery-item"><a href="#" class="gallery-link">
                    <img src="${array.notebooks[3].dell[0].image}" alt="Imagen Iphone 12 pro max">
                    <div class="description-product">
                        <h4 class="name-product">${array.notebooks[3].dell[0].name}</h4>
                        <p><b>$ ${array.notebooks[3].dell[0].price}</b></p>
                        <h5>Envio gratis</h5>
                    </div>
                
                </a></li>
                <li class="gallery-item mas"><a href="#" class="gallery-link">
                    <a href="#">Ver Más</a>
                </a></li>
             
            </ul>
    `
}
const rendercreateHTMLnotebooks = array => {
    return netbooks.innerHTML = createHTMLnotebooks(array)
}



const cargarElementosHtml = async () => {
    const arrayProductos = await requestApi()
    rendercreateHTMLoffSaleProducts(arrayProductos)
    rendercreateHTMLcelulares(arrayProductos)
    renderCreateHTMLtablet(arrayProductos)
    rendercreateHTMLheadsets(arrayProductos)
    rendercreateHTMLnotebooks(arrayProductos);
    
}




const init = () => {
cargarElementosHtml();
}
init();