// import data from "./data/products.json"

// const dataProducts = JSON.stringify(data)
// console.log(dataProducts)

// const fetch = require("node-fetch")

// const products = fetch("./data/products.json")
// console.log(data)
const viewProduct = (product) => {
    const divProduct = `
        <div class= "product" id= "${product.id}">
            <div class= "imgProduct">
                <img src= "./assets/p1.png" atl="Imagen Producto">
            </div>
            <div class= "infoProduct">
                <p class="nameProduct">${product.name}</p>
                <p>${product.price}</p>
                <p>Cantidad: ${product.quantity}</p>
            </div>
            <div class = "profile">
                <img src="./assets/profile.png" alt ="profile"/>
            </div>
            <button class="button">Agregar</button>
        </div>
    `
    return divProduct;
}


const viewListProducts = (listProducts) => {
    let divListProducts = '';
    listProducts.forEach( product => {
      divListProducts += viewProduct(product);
    });
  
    return divListProducts;
  };

const dataProducts = () => {
    return fetch("./data/products.json")
        .then ( response => response.json()) //Indico en que fgit ormato queremos ver nuestra data
        .then ( response => {
            const objectProducts = response.products
            // console.log(objectProducts)
            // objectProducts.forEach( product => {
                document.getElementById("products").innerHTML = viewListProducts(objectProducts)
                // console.log(product.name)
            // });
        })
        .catch ( error => console.log(error))
};

dataProducts();

// const productsList = () => {
    // console.log(dataProducts)
    // dataProducts().then( products => products.forEach( product => {
    //     console.log(product.name)
    // }))
// } 

// productsList();



