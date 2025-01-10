// Mendaftarkan Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('service-worker.js')
      .then(registration => {
        console.log('Service Worker terdaftar:', registration);
      })
      .catch(error => {
        console.error('Pendaftaran Service Worker gagal:', error);
      });
  });
}

// Fungsi untuk menambahkan produk ke keranjang
const cart = [];
const addToCart = (productName, productPrice) => {
  cart.push({ name: productName, price: productPrice });
  updateCart();
};

// Fungsi untuk memperbarui tampilan keranjang
const updateCart = () => {
  const cartList = document.getElementById('cart-list');
  const cartTotal = document.getElementById('cart-total');

  // Menghapus konten lama
  cartList.innerHTML = '';

  // Menambahkan item ke daftar keranjang
  let total = 0;
  cart.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} - Rp ${item.price}`;
    cartList.appendChild(listItem);
    total += item.price;
  });

  // Menampilkan total harga
  cartTotal.textContent = `Total: Rp ${total}`;
};

// Memuat produk secara dinamis
const products = [
  { name: 'Smartphone', price: 3000000, image: 'assets/images/smartphone.jpg' },
  { name: 'Laptop', price: 7500000, image: 'assets/images/laptop.jpg' },
  { name: 'Headphone', price: 500000, image: 'assets/images/headphone.jpg' },
  { name: 'Smart TV', price: 5500000, image: 'assets/images/smart-tv.jpg' },
  { name: 'Camera', price: 4500000, image: 'assets/images/camera.jpg' },
];

const loadProducts = () => {
  const productGrid = document.getElementById('product-grid');

  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product';

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Rp ${product.price.toLocaleString()}</p>
      <button onclick="addToCart('${product.name}', ${product.price})">Beli Sekarang</button>
    `;

    productGrid.appendChild(productCard);
  });
};

// Memuat produk saat halaman dimuat
window.onload = loadProducts;
