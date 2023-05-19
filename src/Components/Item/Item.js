import "../App/App.css";

const Item = (props) => {
  return (
    <div className="item-card">
      <h3>{props.name}</h3>
      <p>${props.price}</p>
    </div>
  );
};

export default Item;
