const productsRow = document.querySelector(".products-row");

function getProductCard(el) {
  const productCard = document.createElement("div");
  productCard.className = "product-card";

  const productCardImg = document.createElement("img");
  productCardImg.src = el.images[0];
  productCardImg.alt = el.name;

  const productCardTitle = document.createElement("h3");

  const productCardTitleText = document.createTextNode(el.id + ". " + el.name);

  productCardTitle.appendChild(productCardTitleText);

  const productCardPrice = document.createElement("p");
  productCardPrice.innerHTML = `${el.price} $`;

  const productCardContent = document.createElement("p");
  productCardContent.textContent = el.description;

  productCard.append(productCardTitle, productCardPrice, productCardContent);

  productCard.prepend(productCardImg);

  return productCard;
}

products.map((el, i) => {
  let card = getProductCard(el);
  productsRow.append(card);
});