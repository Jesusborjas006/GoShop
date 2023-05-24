import "../App/App.css";

const Category = (props) => {
  return (
    <div className="category-sidebar">
      <h2 className="sidebar-heading">Category</h2>
      <p
        onClick={() => props.setFilteredItems(props.allItems)}
        className="category-btn"
      >
        All
      </p>
      <p onClick={() => props.filterFunc("clothes")} className="category-btn">
        Clothes
      </p>
      <p
        onClick={() => props.filterFunc("grocery")}
        className="category-btn"
      >
        Grocery
      </p>
      <p
        onClick={() => props.filterFunc("technology")}
        className="category-btn"
      >
        Technology
      </p>
      <p
        onClick={() => props.filterFunc("toy")}
        className="category-btn"
      >
        Toys
      </p>
      <p
        onClick={() => props.filterFunc("pet supplies")}
        className="category-btn"
      >
        Pet Supplies
      </p>
      <p
        onClick={() => props.filterFunc("personal care")}
        className="category-btn"
      >
        Personal Care
      </p>
    </div>
  );
};

export default Category;
