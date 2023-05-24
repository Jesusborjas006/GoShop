import "../App/App.css";

const Item = (props) => {
  return (
    <div className="item-card">
      <img className="product-img" src={props.img} alt="Product " />
      <div className="text-content">
        <h3 className="product-name">{props.name}</h3>
        <p className="product-price">${props.price}</p>
      </div>
    </div>
  );
};

export default Item;
