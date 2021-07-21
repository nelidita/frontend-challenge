const viewProduct = (product) => {
    const divProduct = `
    <div class="product" id="containerProduct-${product.id}">
        <div class="imgProduct">
            <img class="img" src="./assets/p4.png" atl="Imagen Producto">
        </div>
        <div class="infoProduct">
            <p class="nameProduct">${product.name}</p>
            <p class="price">${product.price}</p>
            <p>Cantidad: ${product.quantity}</p>
        </div>
        <div class="profile">
            <img src="./assets/profile.png" alt="profile" />
        </div>
        <button class="btnAdd" data-id="${product.id}">Agregar</button>
    </div>
    `
    return divProduct;
}

export const viewListProducts = (listProducts) => {
    let divListProducts = '';
    listProducts.forEach(product => {
        divListProducts += viewProduct(product);
    });
    return divListProducts;
};

export const store = () => {
    const containerStore = document.createElement('div');
    containerStore.className = 'containerStore'
    const contenidoStore = `
        <div id="banner">
            <img src="./assets/bitmap-banner.png" alt="banner">
            <div class="divtextBanner">
                <p class="textbanner"><span class="textColor">TE REGALAMOS<br /></span></p>
                <p class="textbanner"><span class="textColor">EN TU PRIMERA<br /></span></p>
                <p class="textbanner"><span class="textColor">COMPRA</span></p>
            </div>
        </div>
        <div class= "textStore">
            <p class= "recienLlegado">RECIEN <span>LLEGADOS</span></p>
            <p class= "loUltimo">Lo último de nuestra tienda</p>
        </div>
        <div id="divListProducts"</div>
    `
    containerStore.innerHTML = contenidoStore
    return containerStore;
}
