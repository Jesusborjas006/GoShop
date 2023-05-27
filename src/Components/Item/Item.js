import "../App/App.css";

const Item = (props) => {
  return (
    <div className="item-card">
      <img className="product-img" src={props.img} alt="Product " />
      <div className="text-content">
        <h3 className="product-name">{props.name}</h3>
        <p className="product-price">${props.price}</p>

        <button
          onClick={() => props.addToCart(props.name)}
          className={
            !props.itemsAdded.includes(props.name)
              ? "add-btn"
              : "add-btn-active"
          }
        >
          {!props.itemsAdded.includes(props.name)
            ? "Add to cart"
            : "Item added"}
        </button>
      </div>
    </div>
  );
};

export default Item;
