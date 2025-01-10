/* Umum */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

header {
  background-color: #4CAF50;
  color: white;
  padding: 15px 0;
  text-align: center;
}

header h1 {
  margin: 0;
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  background-color: #333;
}

nav ul li {
  margin: 0 15px;
}

nav ul li a {
  text-decoration: none;
  color: white;
  padding: 10px 15px;
  display: block;
}

nav ul li a:hover {
  background-color: #575757;
  border-radius: 5px;
}

/* Katalog Produk */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  padding: 20px;
}

.product {
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 15px;
  text-align: center;
  background-color: #f9f9f9;
  transition: box-shadow
