// import data from "./data/products.json"

// const dataProducts = JSON.stringify(data)
// console.log(dataProducts)

// const fetch = require("node-fetch")

// const products = fetch("./data/products.json")
// console.log(products)

const products = () => {
    fetch("./data/products.json")
        .then ( response => response.json()) //Indico en que formato queremos ver nuestra data
        .then ( response => (console.log(response)))
        .catch ( error => console.log(error))
}
products();

const dataProducts = products()
console.log(dataProducts)
