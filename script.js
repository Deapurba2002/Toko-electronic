// Data produk
const products = [
  { id: 1, name: "Smartphone", price: 3000000, image: "assets/smartphone.jpg" },
  { id: 2, name: "Laptop", price: 7000000, image: "assets/laptop.jpg" },
  { id: 3, name: "Smart TV", price: 5000000, image: "assets/smarttv.jpg" },
  { id: 4, name: "Headphones", price: 200000, image: "assets/headphones.jpg" },
  { id: 5, name: "Speaker", price: 800000, image: "assets/speaker.jpg" },
  { id: 6, name: "Printer", price: 1200000, image: "assets/printer.jpg" },
  { id: 7, name: "Wi-Fi Router", price: 400000, image: "assets/router.jpg" },
  { id: 8, name: "Monitor", price: 2000000, image: "assets/monitor.jpg" },
];

// Keranjang belanja
let cart = [];

// Referensi elemen HTML
const productGrid = document.getElementById("product-grid");
const cartList = document.getElementById("cart-list");
const cartTotal = document.getElementById("cart-total");

// Fungsi untuk menampilkan produk
function displayProducts() {
  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Rp ${product.price.toLocaleString()}</p>
      <button onclick="addToCart(${product.id})">Beli Sekarang</button>
    `;
    productGrid.appendChild(productDiv);
  });
}

// Fungsi untuk menambahkan produk ke keranjang
function addToCart(productId) {
  const product = products.find((item) => item.id === productId);
  const cartItem = cart.find((item) => item.id === productId);

  if (cartItem) {
    cartItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  updateCart();
}

// Fungsi untuk memperbarui tampilan keranjang
function updateCart() {
  cartList.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    const cartItem = document.createElement("li");
    cartItem.innerHTML = `
      ${item.name} (x${item.quantity}) - Rp ${(
      item.price * item.quantity
    ).toLocaleString()}
      <button onclick="removeFromCart(${item.id})">Hapus</button>
    `;
    cartList.appendChild(cartItem);
    total += item.price * item.quantity;
  });

  cartTotal.textContent = `Total: Rp ${total.toLocaleString()}`;
}

// Fungsi untuk menghapus produk dari keranjang
function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  updateCart();
}

// Inisialisasi
document.addEventListener("DOMContentLoaded", () => {
  displayProducts();
});
