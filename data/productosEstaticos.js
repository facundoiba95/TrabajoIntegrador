//variables para mostrar productos estaticos
const offsale = document.querySelector('.offsale-products');
const celulares = document.getElementById('celulares')
const tablets = document.getElementById('tablets')
const headsets = document.getElementById('headsets')
const netbooks = document.getElementById('netbooks')

//FUNCIONES PARA MOSTRAR PRODUCTOS OFFSALE
const createHTMLoffSaleproducts = (array) => {
    return `
    <li class="offsale-item product"><a href="javascript:" class="offsale-link">
    <img src="${array[6].image}" alt="samsung a50">
    <h4>${array[6].name}</h4>
    <p class="priceold">$ 84.000</p>
    <p class="pricenow"><b>$ ${array[6].price}</b></p>
    <button class="btnAgregar"
      data-id="${array[6].id}"
      data-image="${array[6].image}"
      data-name="${array[6].name}"
      data-price="${array[6].price}"
      data-freeShipping="${array[6].freeShipping}"
      data-bestSeller="${array[6].bestSeller}"
      data-stock="${array[6].stock}">Agregar</button>

</a></li>
<li class="offsale-item"><a href="javascript:" class="offsale-link">
    <img src="${array[4].image}" alt="iphone 11">
    <h4>${array[4].name}</h4>
    <p class="priceold">$ 290.000</p>
    <p class="pricenow"><b>$ ${array[4].price}</b></p>
    <button class="btnAgregar"
      data-id="${array[4].id}"
      data-image="${array[4].image}"
      data-name="${array[4].name}"
      data-price="${array[4].price}"
      data-freeShipping="${array[4].freeShipping}"
      data-bestSeller="${array[4].bestSeller}"
      data-stock="${array[4].stock}">Agregar</button>

</a></li>
<li class="offsale-item"><a href="javascript:" class="offsale-link">
    <img src="${array[9].image}" alt="iPadPro">
    <h4>${array[9].name}</h4>
    <p class="priceold">$ 314.000</p>
    <p class="pricenow"><b>$ ${array[9].price}</b></p>
    <button class="btnAgregar"
      data-id="${array[9].id}"
       data-image="${array[9].image}"
      data-name="${array[9].name}"
      data-price="${array[9].price}"
      data-freeShipping="${array[9].freeShipping}"
      data-bestSeller="${array[9].bestSeller}"
      data-stock="${array[9].stock}">Agregar</button>

</a></li>
<li class="offsale-item"><a href="javascript:" class="offsale-link">
    <img src="${array[14].image}" alt="lenovo Gamming 3">
    <h4>${array[14].name}</h4>
    <p class="priceold">$ 203.000</p>
    <p class="pricenow"><b>$ ${array[14].price}</b></p>
    <button class="btnAgregar"
      data-id="${array[14].id}"
      data-image="${array[14].image}"
      data-name="${array[14].name}"
      data-price="${array[14].price}"
      data-freeShipping="${array[14].freeShipping}"
      data-bestSeller="${array[14].bestSeller}"
      data-stock="${array[14].stock}">Agregar</button>

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
                <li class="gallery-item"><div class="gallery-link">
                    <img src="${array[0].image}" alt="Imagen Iphone 12 pro max">
                    <div class="description-product">
                        <h4 class="name-product">${array[0].name}</h4>
                        <p><b>$ ${array[0].price}</b></p>
                        <h5>Envio gratis</h5>
                        <button class="btnAgregar"
                        data-id="${array[0].id}"
                        data-image="${array[0].image}"
                        data-name="${array[0].name}"
                        data-price="${array[0].price}"
                        data-freeShipping="${array[0].freeShipping}"
                        data-bestSeller="${array[0].bestSeller}"
                        data-stock="${array[0].stock}">Agregar</button>
                    </div>
                </div></li>
                <li class="gallery-item"><div class="gallery-link">
                    <img src="${array[1].image}" alt="Imagen Iphone 12">
                    <div class="description-product">
                        <h4 class="name-product">${array[1].name} </h4>
                        <p><b>$ ${array[1].price} </b></p>
                        <h5>Envio gratis</h5>
                        <button class="btnAgregar"
                        data-id="${array[1].id}"
                        data-image="${array[1].image}"
                        data-name="${array[1].name}"
                        data-price="${array[1].price}"
                        data-freeShipping="${array[1].freeShipping}"
                        data-bestSeller="${array[1].bestSeller}"
                        data-stock="${array[1].stock}">Agregar</button>
                    </div>
                </div></li>
                <li class="gallery-item"><div class="gallery-link">
                    <img src="${array[2].image}" alt="Imagen Iphone 13">
                    <div class="description-product">
                        <h4 class="name-product">${array[2].name}</h4>
                        <p><b>$ ${array[2].price}</b></p>
                        <h5>Envio gratis</h5>
                        <button class="btnAgregar"
                        data-id="${array[2].id}"
                        data-image="${array[2].image}"
                        data-name="${array[2].name}"
                        data-price="${array[2].price}"
                        data-freeShipping="${array[2].freeShipping}"
                        data-bestSeller="${array[2].bestSeller}"
                        data-stock="${array[2].stock}">Agregar</button>
                    </div>
                </div></li>
                <li class="gallery-item"><div class="gallery-link">
                    <img src="${array[5].image}" alt="Imagen Iphone 13 pro max">
                    <div class="description-product">
                        <h4 class="name-product">${array[5].name}</h4>
                        <p><b>$ ${array[5].price}</b></p>
                        <h5>Envio gratis</h5>
                        <button class="btnAgregar"
                        data-id="${array[5].id}"
                        data-image="${array[5].image}"
                        data-name="${array[5].name}"
                        data-price="${array[5].price}"
                        data-freeShipping="${array[5].freeShipping}"
                        data-bestSeller="${array[5].bestSeller}"
                        data-stock="${array[5].stock}">Agregar</button>
                    </div>
                </div></li>
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
                <li class="gallery-item"><div class="gallery-link">
                    <img src="${array[10].image}" alt="Imagen iPad Air 4">
                    <div class="description-product">
                        <h4 class="name-product">${array[10].name}</h4>
                        <p><b>$ ${array[10].price}</b></p>
                        <h5>Envio gratis</h5>
                        <button class="btnAgregar"
                        data-id="${array[10].id}"
                        data-image="${array[10].image}"
                        data-name="${array[10].name}"
                        data-price="${array[10].price}"
                        data-freeShipping="${array[10].freeShipping}"
                        data-bestSeller="${array[10].bestSeller}"
                        data-stock="${array[10].stock}">Agregar</button>
                    </div>
                
                </div></li>
                <li class="gallery-item"><div class="gallery-link">
                    <img src="${array[8].image}" alt="Imagen samsung tab s6 lite">
                    <div class="description-product">
                        <h4 class="name-product">${array[8].name}</h4>
                        <p><b>$ ${array[8].price}</b></p>
                        <h5>Envio gratis</h5>
                        <button class="btnAgregar"
                        data-id="${array[8].id}"
                        data-image="${array[8].image}"
                        data-name="${array[8].name}"
                        data-price="${array[8].price}"
                        data-freeShipping="${array[8].freeShipping}"
                        data-bestSeller="${array[8].bestSeller}"
                        data-stock="${array[8].stock}">Agregar</button>
                    </div>
                
                </div></li>
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
                <li class="gallery-item"><div class="gallery-link">
                    <img src="${array[12].image}" alt="Imagen headsets corsair virtuoso special edition">
                    <div class="description-product">
                        <h4 class="name-product">${array[12].name}</h4>
                        <p><b>$ ${array[12].price}</b></p>
                        <h5>Envio gratis</h5>
                        <button class="btnAgregar"
                        data-id="${array[12].id}"
                        data-image="${array[12].image}"
                        data-name="${array[12].name}"
                        data-price="${array[12].price}"
                        data-freeShipping="${array[12].freeShipping}"
                        data-bestSeller="${array[12].bestSeller}"
                        data-stock="${array[12].stock}">Agregar</button>
                    </div>
                
                </div></li>
                <li class="gallery-item"><div class="gallery-link">
                    <img src="${array[11].image}" alt="Imagen headsets AKG k420">
                    <div class="description-product">
                        <h4 class="name-product">${array[11].name}</h4>
                        <p><b>$ ${array[11].price}</b></p>
                        <h5>Envio gratis</h5>
                        <button class="btnAgregar"
                        data-id="${array[11].id}"
                        data-image="${array[11].image}"
                        data-name="${array[11].name}"
                        data-price="${array[11].price}"
                        data-freeShipping="${array[11].freeShipping}"
                        data-bestSeller="${array[11].bestSeller}"
                        data-stock="${array[11].stock}">Agregar</button>
                    </div>
                
                </div></li>
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
                <li class="gallery-item"><div class="gallery-link">
                    <img src="${array[15].image}" alt="Imagen lenovo thinkbook 15">
                    <div class="description-product">
                        <h4 class="name-product">${array[15].name}</h4>
                        <p><b>$ ${array[15].price}</b></p>
                        <h5>Envio gratis</h5>
                        <button class="btnAgregar"
                        data-id="${array[15].id}"
                        data-image="${array[15].image}"
                        data-name="${array[15].name}"
                        data-price="${array[15].price}"
                        data-freeShipping="${array[15].freeShipping}"
                        data-bestSeller="${array[15].bestSeller}"
                        data-stock="${array[15].stock}">Agregar</button>
                    </div>
                
                </div></li>
                <li class="gallery-item"><div class="gallery-link">
                    <img src="${array[17].image}" alt="Imagen dell inspiron n5559">
                    <div class="description-product">
                        <h4 class="name-product">${array[17].name}</h4>
                        <p><b>$ ${array[17].price}</b></p>
                        <h5>Envio gratis</h5>
                        <button class="btnAgregar"
                        data-id="${array[17].id}"
                        data-image="${array[17].image}"
                        data-name="${array[17].name}"
                        data-price="${array[17].price}"
                        data-freeShipping="${array[17].freeShipping}"
                        data-bestSeller="${array[17].bestSeller}"
                        data-stock="${array[17].stock}">Agregar</button>
                    </div>
                
                </div></li>
                <li class="gallery-item"><div class="gallery-link">
                    <img src="${array[18].image}" alt="Imagen macbook pro">
                    <div class="description-product">
                        <h4 class="name-product">${array[18].name}</h4>
                        <p><b>$ ${array[18].price}</b></p>
                        <h5>Envio gratis</h5>
                        <button class="btnAgregar"
                        data-id="${array[18].id}"
                        data-image="${array[18].image}"
                        data-name="${array[18].name}"
                        data-price="${array[18].price}"
                        data-freeShipping="${array[18].freeShipping}"
                        data-bestSeller="${array[18].bestSeller}"
                        data-stock="${array[18].stock}">Agregar</button>
                    </div>
                
                </iv></li>
                <li class="gallery-item"><div class="gallery-link">
                    <img src="${array[16].image}" alt="Imagen netbook razer blade 15">
                    <div class="description-product">
                        <h4 class="name-product">${array[16].name}</h4>
                        <p><b>$ ${array[16].price}</b></p>
                        <h5>Envio gratis</h5>
                        <button class="btnAgregar"
                        data-id="${array[16].id}"
                        data-image="${array[16].image}"
                        data-name="${array[16].name}"
                        data-price="${array[16].price}"
                        data-freeShipping="${array[16].freeShipping}"
                        data-bestSeller="${array[16].bestSeller}"
                        data-stock="${array[16].stock}">Agregar</button>
                    </div>
                
                </div></li>
                <li class="gallery-item mas"><a href="#" class="gallery-link">
                    <a href="#">Ver Más</a>
                </a></li>
             
            </ul>
    `
}
const rendercreateHTMLnotebooks = array => {
    return netbooks.innerHTML = createHTMLnotebooks(array)
}

//aca se ejecutan todas las funciones para cargar los productos estaticos
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