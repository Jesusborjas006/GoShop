import "../App/App.css";

const Category = () => {
  return (
    <div className="category-sidebar">
      <h2 className="sidebar-heading">Category</h2>
      <p
        // onClick={() => getFilteredItems("technology")}
        className="category-btn"
      >
        Technology
      </p>
      <p
        // onClick={() => getFilteredItems("pet supplies")}
        className="category-btn"
      >
        Pet Supplies
      </p>
      <p
        // onClick={() => getFilteredItems("personal care")}
        className="category-btn"
      >
        Personal Care
      </p>
    </div>
  );
};

export default Category;
