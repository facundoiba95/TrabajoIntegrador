//variables para manejar DOM de USUARIOS
const btnUserLogin = document.querySelector('.btnUserLogin')
const btnUserNewUser = document.querySelector('.btnUserNewUser')
const home = document.querySelector('.home')
const login = document.querySelector('.login')
const register = document.querySelector('.register')
const formRegister= document.getElementById('register')
const formLogin= document.getElementById('login')
const menu__account = document.querySelector('.menu__account')
const arrowback = document.querySelector('.fa-sharp.fa-solid.fa-arrow-left')
const iconoUser = document.querySelector('.fa-regular.fa-user')
const msgUserAdd = document.querySelector('.msgUserAdd')

//variables para el carrito
let cart = JSON.parse(localStorage.getItem('cart')) || [];
const cart__container = document.querySelector('.cart__container');
const cart__ul__producto= document.querySelector('.cart__ul__producto')
const cart__li = document.querySelector('.cart__li')
const btnCerrarCarrito = document.querySelector('.fa-sharp.fa-solid.fa-xmark')
const btnCarrito = document.querySelector('.fa-solid.fa-cart-shopping')
const cart__total = document.querySelector('.cart__total')
const cart__subtotal= document.querySelector('.cart__subtotal')
const btnAgregar = document.querySelector('.btnAgregar')
const contadorCarrito = document.querySelector('.contador__carrito')
const btnComprar = document.querySelector('.btnComprar')


//variables para USUARIOS
let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
//nuevo usuario
const nameUser = document.querySelector('.name');
const emailUser = document.querySelector('.email');
const usernameNewUser = document.querySelector('.usernameNewUser');
const passwordNewUser = document.querySelector('.passwordNewUser');

//login
const usernameLogin = document.querySelector('.usernameLogin')
const passwordLogin = document.querySelector('.passwordLogin')

//perfil de usuario
const listProductUser = document.querySelector('.listProductUser')
const perfilUser__container = document.querySelector('.perfilUser__container')
const infoUser = document.querySelector('.infoUser')
const productTotal__user = document.querySelector('.productTotal__user')
const msgUser__contain = document.querySelector('.msgUser__contain')
const msgUser = document.querySelector('.msgUser')


//variables para SEARCHBAR
const searchBar__nav__menu = document.querySelector('.searchbar__nav__menu')
const searchBar = document.getElementById('searchbar')
const list__resultSearch = document.querySelector('.list__resultSearch')
const msgProductSearch = document.querySelector('.msgProductSearch')
//variable de slider
const sliderProductos = document.querySelector('.sliderProductos')



////////////////////////////////////////////////////////////////////////////////////////////////////////
//funciones para mostrar y ocultar LOGIN, REGISTER,HOME

const mostrarMenu = e => {
    if(!e.target.classList.contains('fa-bars'))return;
    menu__account.style.display="flex";
    home.style.display = "flex"
}
const cerrarMenu = e => {
    if(!e.target.classList.contains('fa-circle-xmark')) return
    menu__account.style.display="none"
}
const ocultarHomeYregister = ()=> {
    home.style.display="none",
    home.style.visibility="hidden";
    register.style.display="none"
    register.style.visibility="hidden"
}

const mostrarLogin = e => {
    if(!e.target.classList.contains('btnIrLogin')) return;

    login.style.display="flex"
    ocultarHomeYregister()
}

const mostrarRegister = e => {
    if(!e.target.classList.contains('btnIrRegister')) return;

    register.style.display="flex"
    register.style.visibility="visible"
    home.style.display="none"

}
const mostrarHome= () => {
    login.style.display = "none";
    register.style.display = "none";
    home.style.display="flex"
    home.style.visibility="visible"
    formRegister.reset()
    formLogin.reset();
}
const resetearForms = e => {
    if(!e.target.classList.contains('fa-arrow-left'))return;  
    mostrarHome();
}
/////////////////////////////


//funciones del CARRITO
const mostrarCarrito = e => {
    if(!e.target.classList.contains('fa-cart-shopping'))return;
    cart__container.classList.remove('hidden')
    cart__container.style.display="block"
  }
const cerrarCarrito = e => {
    if(!e.target.classList.contains('fa-xmark')) return;
        cart__container.classList.add('hidden')  
        cart__container.style.display="none"
}


const createHtmlCart = array => {
    const {id,name,image,price,freeShipping,bestSeller,quantity} = array;
    return`
            <li class="cart__li">
                <i class="fa-regular fa-trash-can"></i>
                <i class="fa-regular fa-heart"></i>
                <img src="${image}" data-image="${image}" alt="" style="width:100px; padding:10px;">
                <div class="cart__info">
                    <h4 class="cart__name" data-name="${name}">${name}</h4>
                    <h4 class="cart__name__hover">${name}</h4>
                    <h4 class="cart__price" data-price="${price}">$ ${price}</h4>
                    <h5 class="cart__freeShipping" data-freeShipping="${freeShipping}">Envio gratis</h5>
                    <small class="cart__bestSeller" data-bestSeller="${bestSeller}">${bestSeller}</small>
                </div>
                <div class="cart__count">
                    <i class="fa-solid fa-minus" data-id="${id}"></i>            
                    <p class="count">${quantity}</p>
                    <i class="fa-solid fa-plus" data-id="${id}"></i>
                </div>
            </li>
    `
}

const renderCreateHtmlCart = array => {
    cart__ul__producto.innerHTML = array.map(product => createHtmlCart(product)).join('');

}
const cambiarPrecioCantidad =()=> {
    contadorCarrito.textContent = cart.reduce((acc, cur) => acc + cur.quantity ,0)
    cart__total.textContent = cart.reduce((acc, cur) => acc + Number(cur.price * cur.quantity), 0);
    cart__subtotal.textContent = cart.reduce((acc, cur) => acc + Number(cur.price * cur.quantity), 0);
}
const isExistingProducto = array => {
    return cart.find(producto => producto.id === array.id)
}

const productTarget = e => {
    const {id,name,price,image,stock,freeShipping,bestSeller} = e.target.dataset;
    const producto = {id,name,image,price,stock,freeShipping,bestSeller}
    return producto;
}
const addUnitProduct = array => {
    cart = cart.map(cartProduct => {
        return cartProduct.id === array.id
         ? { ... cartProduct, quantity: cartProduct.quantity+1} 
        : cartProduct;
    })
}

const addProductCart = e => {
    if(!e.target.classList.contains('btnAgregar')){
        if(!cart.length){
        cart__ul__producto.textContent = "Aún no hay productos en el carrito."
        contadorCarrito.style.display ="none"
        }
        return;
    } 

    isExistingProducto(productTarget(e))
    ? addUnitProduct(productTarget(e))
    : cart = [ ... cart, {... productTarget(e), quantity:1}]
    
    contadorCarrito.style.display ="block"
    cambiarPrecioCantidad()
    renderCreateHtmlCart(cart)
}

const btnMore = e => {
    if(!e.target.classList.contains('fa-plus')) return;
    
    if(isExistingProducto(productTarget(e))){
        addUnitProduct(productTarget(e))  
    }
    cambiarPrecioCantidad()
    renderCreateHtmlCart(cart)
}

const btnMinus = e => {
    if(!e.target.classList.contains('fa-minus')) return;
    removeUnitProduct(e)
}

const removeUnitProduct = e => {
    const valueID = e.target.dataset.id;
    
    cart = cart.map(cartProduct => {
        return cartProduct.id === valueID
         ? { ... cartProduct, quantity: cartProduct.quantity-1} 
        : cartProduct;
    })

    if(cart.find(product =>{ 
        if(product.quantity === 0){
            window.confirm('Desea eliminar producto ?') 
            ? removeProductCart(e)
            : product.quantity=1;
        }
        cambiarPrecioCantidad()
    }))

    cambiarPrecioCantidad()
    renderCreateHtmlCart(cart)
}

const removeProductCart = e => {
    const valueID = e.target.dataset.id;
    cart = cart.filter(product => product.id !== valueID)
   
}




//funciones para USUARIOS
let usuariosLogin = JSON.parse(localStorage.getItem('usuariosLogin')) || [];

const saveLocalStorageUsuarios = array => {
    localStorage.setItem('usuarios', JSON.stringify(array))
}

const saveLocalStorageUsuariosLogin = array => {
    localStorage.setItem('usuariosLogin', JSON.stringify(array))

}

//fecha de alta de usuario
let fechadeAltaUsuario = new Date().toLocaleString(undefined,{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour:'numeric',minute:'numeric', second:'numeric' })

const usuarioCreado = () => {
    iconoUser.style.display="block"
    msgUserAdd.textContent="Se agrego nuevo usuario!"
    iconoUser.style.color="chartreuse"
    iconoUser.style.fontWeight ="800"
    msgUserAdd.style.top="25px"

    setTimeout(()=> {
        iconoUser.style.color="black"
        iconoUser.style.fontWeight ="100"
        msgUserAdd.style.top="-1000px"
    },3000)
   
}
const msgInicioSesion = () => {
   usuarioCreado();
   msgUserAdd.textContent="Se inició sesión!"
   iconoUser.style.display="block";

   setTimeout(()=> { 
      menu__account.style.display="none"
      cart= []
      mostrarHome()
   },3000)
}
const msgErrorLogin = () => {
    msgUser__contain.style.transition = "all 0.5s ease-in-out";
    msgUser__contain.style.top = "80px"

    setTimeout(()=> {
        msgUser__contain.style.top = "-1000px"

    },2000)


}

const isExistingUser = (array,value)=> {
    return array.find(usuario => usuario.usernameValue === value )
}

const addNewUser = e => {
   e.preventDefault()
   const nameUserValue= nameUser.value.trim()
   const emailUserValue= emailUser.value.trim()
   const usernameValue= usernameNewUser.value.trim()
   const passwordValue= passwordNewUser.value.trim()
   
   const user = {nameUserValue,emailUserValue,usernameValue,passwordValue,id: usuarios.length +1,fechadeAltaUsuario}

   if(isExistingUser(usuarios,usernameValue)){
      alert('ya existe este usuario! porfavor ingresa otro.') //renderizar modal o mensaje
      formRegister.reset();
      return;
   } else {
    usuarios = [ ... usuarios, user]
   }

    formLogin.reset()
    formRegister.reset();
    mostrarHome();
    usuarioCreado();
    saveLocalStorageUsuarios(usuarios)
}

const validarPassword = (array, password) => {
   return array.some(user => user.passwordValue === password);
}

const iniciarSesion = e => {
    e.preventDefault();
    const usernameValue = usernameLogin.value.trim()
    const passwordValue = passwordLogin.value.trim()

    if(isExistingUser(usuarios,usernameValue)){
        if(validarPassword(usuarios, passwordValue)){
            usuariosLogin = usuarios.filter(usuario => usuario.usernameValue === usernameValue)           
            saveLocalStorageUsuariosLogin(usuariosLogin)
            msgInicioSesion();
        } else{
            msgUser.textContent = "Contraseña incorrecta!" 
            msgErrorLogin()  
        }
    } else {
        msgUser.textContent="No existe este usuario!"
        msgErrorLogin()
}
passwordLogin.value = ''
}


///////////////////////

//funciones para agregar compra segun usuario
const addBuy = () => {
    usuariosLogin =  usuariosLogin.map(usuario => {
      return { ... usuario, producto: cart}
    })

    
saveLocalStorageUsuariosLogin(usuariosLogin) 
msgBuySuccessful()
}


const msgBuySuccessful= ()=> {
    cart__ul__producto.innerHTML = `
    <div class="msgBuySuccessful">
        <i class="fa-solid fa-cart-circle-check"></i>
        <h3>Compra exitosa !</h3>
    </div>`
    
    setTimeout(()=> {
        cart__container.style.display="none"
        contadorCarrito.style.display="none"
        cart=[]
        cambiarPrecioCantidad()
    },3000);
}



// funciones para PERFIL DE USUARIO
const mostrarPerfil = e => {
    if(!e.target.classList.contains('fa-user')){
        perfilUser__container.style.display="none"
        return;
    }
    
    perfilUser__container.style.display="flex"
    cart__total.textContent = cart.reduce((acc, cur) => acc + Number(cur.price * cur.quantity), 0);
    rendercreateHTMLinfoUser(usuariosLogin[0])
    rendercreateHTMLComprasUsuario(usuariosLogin)
}

//recibe array de productos
const createHTMLComprasUsuario = array => {
    let {image,name,price,quantity} =array
    productTotal__user.textContent= usuariosLogin[0].producto.reduce((acc, cur) => acc + Number(cur.price * cur.quantity), 0);

    return `
    <li class="listProductUser__item">
        <img src="${image}" data-image="${image}" alt="" style="width:100px;">
        <div class="productUser__info">
            <h4 class="productUser__name" data-name="${name}">${name}</h4>
             <h4 class="productUser__price" data-price="${price}">$ ${price}</h4>
             <p class="ProductCount">Cantidad: ${quantity}</p>
        </div>
    </li>
    `
}

const rendercreateHTMLComprasUsuario = array => {
    listProductUser.innerHTML = array[0].producto ?
     array[0].producto.map(producto => createHTMLComprasUsuario(producto)).join('')
     : listProductUser.textContent= "Aun no realizaste compras!"
}

const createHTMLinfoUser = array => {
    const {usernameValue,emailUserValue,fechadeAltaUsuario} = array
    return `
    <h3 class="nameUser"> Bienvenido ${usernameValue} !</h3>
    <h3 class="emailUser">Email: ${emailUserValue}</h3>
    <h3 class="fechaAltaUsuario">Miembro desde:  ${fechadeAltaUsuario}</h3>
    `
}
const rendercreateHTMLinfoUser = array => {
    infoUser.innerHTML=createHTMLinfoUser(array)
}




///funciones para SEARCHBAR

const createHTMLproductSearch = array=> {
    const {id, image,name,price,stock,bestSeller,freeShipping}= array;
    return `
            <li class="item__resultSearch">
                    <img src="${image}" alt="Imagen iPad Air 4">
                    <div class="description__searchProduct">
                        <h4 class="name-product">${name}</h4>
                        <p><b>$ ${price}</b></p>
                        <h5>Envio gratis</h5>
                        <button class="btnAgregar"
                        data-id="${id}"
                        data-image="${image}"
                        data-name="${name}"
                        data-price="${price}"
                        data-freeShipping="${freeShipping}"
                        data-bestSeller="${bestSeller}"
                        data-stock="${stock}">Agregar</button>
                    </div>
            </li>
    `
}

const rendercreateHTMLproductSearch = array => {
    //aca va el array mapeado para renderizar createHTMLsearchBar
    list__resultSearch.innerHTML = array.map(productos => createHTMLproductSearch(productos)).join('')
}

const createHTMLmsgProductSearch = (array) => `<h4 class="title__resultSearch">Se encontraron "${array.length}" para la busqueda de "${searchBar.value.trim()}"</h4>`
const rendercreateHTMLmsgProductSearch = array => msgProductSearch.innerHTML = createHTMLmsgProductSearch(array)

const searchProduct = async e => {
    let productosFiltrados = [];
    e.preventDefault();

    const arrayProductos = await requestApi();
    var searchbarValue = searchBar.value.trim()

    productosFiltrados = arrayProductos.filter(producto => producto.tags?.includes(searchbarValue))
    sliderProductos.style.display="none"
    list__resultSearch.style.display="flex"
    rendercreateHTMLmsgProductSearch(productosFiltrados)
    rendercreateHTMLproductSearch(productosFiltrados)
    
    
}






const ejecutarMain = () => {
    
    //eventos para agregar al carrito
    contadorCarrito.style.display ="none"
    document.addEventListener('click',mostrarCarrito)
    document.addEventListener('click',addProductCart)
    document.addEventListener('click', cerrarCarrito)
    document.addEventListener('click',btnMore)
    document.addEventListener('click',btnMinus)

    //evento para comprar
    btnComprar.addEventListener('click', addBuy)
    
    //eventos para USUARIOS
    document.addEventListener('click',resetearForms)
    document.addEventListener('click', mostrarMenu)
    document.addEventListener('click',cerrarMenu)   
    document.addEventListener('click', mostrarLogin)
    document.addEventListener('click', mostrarRegister)
    formLogin.addEventListener('submit', iniciarSesion)
    formRegister.addEventListener('submit', addNewUser) 
    
    
    //eventos para PERFIL DE USUARIO
    document.addEventListener('click', mostrarPerfil)

    //eventos para SEARCHBAR
    searchBar__nav__menu.addEventListener('submit', searchProduct)
    sliderProductos.style.display="block"
}

ejecutarMain()