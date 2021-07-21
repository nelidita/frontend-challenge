import { viewListProducts, store} from './views.js'

const storeProducts = () => {
    window.addEventListener("DOMContentLoaded", () => {
        document.getElementById("containerCar").style.display = "none"
        document.getElementById("products").style.display = "block"
    })
}
storeProducts();

const addProduct = btnsAdd => {    
    btnsAdd.forEach (btn => btn.addEventListener('click', (event) => {
        const button = event.target
        const product = button.closest (".product")
        const img = product.querySelector(".img").src
        const name = product.querySelector(".nameProduct").textContent
        const price = product.querySelector(".price").textContent
              
        car(img,name,price);
    }))
};

const car = (img,name,price) => {
    const containerCar = document.createElement('div');  
    const contenidoCar = `
        <div id="rowCar" class="rowCar">
            <div class="divImgCar">
                <img class="imgCar" src= ${img} atl="Imagen Producto">
            </div>
            <div class="divNameCar">
                <p class="nameCar">${name}</p>
            </div>
            <div class="divQuantity">
                <input class="quantity" type= "number" value="1"/>
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
    const divCar = document.getElementById("car")
    divCar.appendChild(containerCar)

    document.querySelectorAll(".btnEliminar").forEach(btn => {
        btn.addEventListener("click", deleteProduct)
    })
    
    totalPrice();
};

const totalPrice = () => {
    let totalPriceProducts = 0;
    const productsCar = document.querySelectorAll(".rowCar")

    productsCar.forEach( productCar => {
        const textPrice = productCar.querySelector(".priceCar").textContent
        const numberPrice = Number(textPrice.replace(/[$,]/g,''))
        const quantityProducts = Number(productCar.querySelector(".quantity").value)
        totalPriceProducts = totalPriceProducts + numberPrice * quantityProducts
    })

    const pPriceTotal = document.getElementById ("priceTotal")
    pPriceTotal.innerHTML = ("$ " + totalPriceProducts);  
}

const shoppingCar = () => {
    document.getElementById("imgShoppingCar").addEventListener("click", () => {
        document.getElementById("containerCar").style.display = "block"
        document.getElementById("products").style.display = "none"
    })

    document.getElementById("volverTienda").addEventListener("click",() => {
        document.getElementById("containerCar").style.display = "none"
        document.getElementById("products").style.display = "block"
    })
}

const deleteProduct = (event) => {
    const elementSelect = event.target
    elementSelect.closest(".rowCar").remove()
}

const dataProducts = () => {
    return fetch("./data/products.json")
        .then(response => response.json()) //Indico en que formato queremos ver nuestra data
        .then(response => {
            const listProducts = response.products
            document.getElementById("products").appendChild(store())//Agrego todos los productos.
            document.getElementById("divListProducts").innerHTML = viewListProducts(listProducts) //Agrego el contenido de cada producto
            
            const btnsAdd = document.querySelectorAll('.btnAdd');
            addProduct(btnsAdd)
            shoppingCar()      
        })
        .catch(error => console.log(error))
};
dataProducts();