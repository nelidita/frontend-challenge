import { viewListProducts, store } from './views.js'

const dataProducts = () => {
    return fetch("./data/products.json")
        .then(response => response.json()) //Indico en que formato queremos ver nuestra data
        .then(response => {
            const listProducts = response.products
            document.getElementById("products").appendChild(store())//Agrego todos los productos.
            document.getElementById("divListProducts").innerHTML = viewListProducts(listProducts) //Agrego el contenido de cada producto
            
            
            const btnsAdd = document.querySelectorAll('.btnAdd');
            document.getElementById("car").appendChild(addProduct(btnsAdd));
           
        })
        .catch(error => console.log(error))
};
dataProducts();

const addProduct = (btnsComprar) => {
    let divListAddProducts = '';
    btnsComprar.forEach( btn => btn.addEventListener('click', (event) => {
        const button = event.target
        const product = button.closest (".product")
        const img = product.querySelector(".img").src
        const name = product.querySelector(".nameProduct").textContent
        const price = product.querySelector(".price").textContent
        
        divListAddProducts += car(img,name,price)
        /*car(img,name,price)*/

    }))
    return divListAddProducts
}

const car = (img,name,price) => {
    const containerCar = document.createElement('div');  
    containerCar.className = 'containerCar'
    const contenidoCar = `
        <div id="rowCar">
            <div class="divImgCar">
                <img class="imgCar" src= ${img} atl="Imagen Producto">
            </div>
            <div class="divNameCar">
                <p class="nameCar">${name}</p>
            </div>
            <div class="divPriceCar">
                <p class="priceCar">${price}</p>
            </div>
            <div class="btnEliminar">
                <img src="./assets/delete.png" alt= "Eliminar"/>
            </div>
        </div>
        `
    containerCar.innerHTML = contenidoCar;
    return containerCar;
}