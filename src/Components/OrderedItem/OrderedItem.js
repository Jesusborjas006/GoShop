import "../App/App.css";

const OrderedItem = (props) => {
  // console.log(props);
  return (
    <div className="ordered-item">
      <p>{props.name}</p>
      <hr />
    </div>
  );
};

export default OrderedItem;
