const productsRow = document.querySelector(".products-row");
const productsCount = document.querySelector(".products-count");
const searchInput = document.querySelector(".search-input");
const pagination = document.querySelector(".pagination");

let search = "";

let activePage = 1;

function getProductCard(el) {
  return `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
      <div class="card">
        <img src="${el.images[0]}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${el.name}</h5>
          <p class="card-text">
            ${el.description}
          </p>
          <button class="btn btn-primary">Add to cart ${el.id}</button>
        </div>
      </div>
    </div>
  `;
}

function getProducts() {
  let results = products.filter((el) => el.name.toLowerCase().includes(search));

  let pages = Math.ceil(results.length / 10);

  if (pages > 1) {
    pagination.innerHTML = `
      <li class="page-item ${activePage === 1 ? "disabled" : ""}">
        <button onclick="getPage('-')" class="page-link">Previous</button>
      </li>
    `;

    for (let i = 1; i <= pages; i++) {
      pagination.innerHTML += `
        <li class="page-item ${i === activePage ? "active" : ""}">
          <button onclick="getPage(${i})" class="page-link">${i}</button>
        </li>
      `;
    }

    pagination.innerHTML += `
      <li class="page-item ${activePage === pages ? "disabled" : ""}">
        <button onclick=getPage('+') class="page-link">Next</button>
      </li>
    `;
  } else {
    pagination.innerHTML = "";
  }

  let start = (activePage - 1) * 10;
  let end = activePage * 10;

  let pageResults = results.slice(start, end);

  productsRow.innerHTML = "";

  pageResults.map((el) => {
    productsRow.innerHTML += getProductCard(el);
  });

  productsCount.textContent = results.length;
}

getProducts();

searchInput.addEventListener("keyup", function () {
  activePage = 1;
  search = this.value.trim().toLowerCase();
  getProducts();
});

function getPage(page) {
  if (page === "+") {
    activePage++;
  } else if (page === "-") {
    activePage--;
  } else {
    activePage = page;
  }
  getProducts();
}
