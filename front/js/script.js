window.onload= async ()=> {
  // Ici je réalise un fetch avec une promesse //
  const products = await getProducts()
  for (let product of products) {
      // Ici j'affiche les données de mes produits //
      let display= `<a href="./product.html?id=${product._id}">
      <article>
        <img src=${product.imageUrl} alt=${product.altTxt}>
        <h3 class="productName">${product.name}</h3>
        <p class="productDescription">${product.description}</p>
      </article>
    </a>`
    document.getElementById('items').insertAdjacentHTML("beforeend",display)
    //Je demande qu'il cherche les éléments par les id des items puis qu'ils soient injectés dans le html en position "en avant" dans ma variable display // 
  }
}
  