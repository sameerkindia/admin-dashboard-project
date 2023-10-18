import { HiSearch } from "react-icons/hi";

function ProductSection() {
  return (
    <div className="product-container">
      <div className="product-nav">
        <p>Product sell</p>
        <div>
          <label className="product-nav-search">
            <span>
              <HiSearch />
            </span>
            <input type="text" />
          </label>
          <select>
            <option>Last 30 days</option>
          </select>
        </div>
      </div>
      <div className="product-info-bar">
        <p>Product Name</p>
        <div>
          <span>Stock</span>
          <span>Price</span>
          <span>Total Sale</span>
        </div>
      </div>

      <div className="product-body">
        <div className="product-body-info">
          <div className="product-body-img">Image</div>
          <div className="product-body-text">
            <p className="title">Title</p>
            <p className="description">Description</p>
          </div>
        </div>
        <div className="product-body-details">
          <span>32 in stock</span>
          <span className="bold">$ 45.99</span>
          <span>20</span>
        </div>
      </div>
    </div>
  );
}

export default ProductSection;
