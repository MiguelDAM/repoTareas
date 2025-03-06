// src/components/ProductsPage.js

import { useState } from 'react';
import jsonData from '../data.json';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [searchTerm, setSearchTerm] = useState('');
  const [showInStock, setShowInStock] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleInStockChange = () => {
    setShowInStock(!showInStock);
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearchTerm = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesInStock = showInStock ? product.inStock : true;
    return matchesSearchTerm && matchesInStock;
  });
  return (
    <>
      <div>
        <h1>IronStore</h1>
      </div>
      <div className="searchBar">
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          showInStock={showInStock}
          onInStockChange={handleInStockChange}
        />
      </div>
      <div className="productTable">
        <ProductTable products={filteredProducts} />
      </div>
    </>
  );
}

function SearchBar({
  searchTerm,
  onSearchChange,
  showInStock,
  onInStockChange,
}) {
  return (
    <>
      <h3>Search</h3>
      <input
        type="text"
        className="barraBusqueda"
        value={searchTerm}
        onChange={onSearchChange}
      />
      <br></br>
      <div className="checkContainer">
        <input
          type="checkbox"
          className="checkStock"
          checked={showInStock}
          onChange={onInStockChange}
        />
        <p>Only show products in stock</p>
      </div>
    </>
  );
}

function ProductTable({ products }) {
  return (
    <table className="tablaProductos">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <ProductRow key={product.id} product={product} />
        ))}
      </tbody>
    </table>
  );
}

function ProductRow({ product }) {
  return (
    <tr className={!product.inStock ? 'outOfStock' : ''}>
      <td>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

export default ProductsPage;
export { SearchBar };
export { ProductTable };
