import { viewListProducts, store } from './views.js'

const dataProducts = () => {
    return fetch("./data/products.json")
        .then(response => response.json()) //Indico en que formato queremos ver nuestra data
        .then(response => {
            const listProducts = response.products
            document.getElementById("products").appendChild(store())//Agrego todos los productos.
            document.getElementById("divListProducts").innerHTML = viewListProducts(listProducts) //Agrego el contenido de cada producto
            
            const btnsComprar = document.querySelectorAll('.btnComprar');
            btnsComprar.forEach((btn) => btn.addEventListener('click', (event) => {
            console.log(btn)
            }))


        })
        .catch(error => console.log(error))
};
dataProducts();

// const btnsComprar = () => {

    // const btnsComprar = document.querySelectorAll('.btnComprar');
   
    // btnsComprar.forEach((btn) => btn.addEventListener('click', (event) => {
    // console.log(btn)
    // }))
// }