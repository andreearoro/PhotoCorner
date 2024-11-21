const URL = "https://670fe5c2a85f4164ef2c625c.mockapi.io/products"

async function displayProductDetails() {
  try {
    const response = await fetch(URL);
    const products = await response.json();

    const container = document.getElementById("product-details");

    products.forEach((product) => {
      const productElement = document.createElement("div");
      productElement.classList.add("product");

      const nameElement = document.createElement("h3");
      nameElement.textContent = product.name;

      const priceElement = document.createElement("p");
      priceElement.textContent = `Pret: ${product.price}`;

      const pictureElement = document.createElement("img");
      pictureElement.src = product.imageURL;

      const descriptionElement = document.createElement("p");
      descriptionElement.textContent = product.details;

      productElement.appendChild(nameElement);
      productElement.appendChild(priceElement);
      productElement.appendChild(pictureElement);
      productElement.appendChild(descriptionElement);

      container.appendChild(productElement);
    });
  } catch (error) {
    console.error("Error fetching product data:", error);
  }
}

window.addEventListener("DOMContentLoaded", displayProductDetails); 