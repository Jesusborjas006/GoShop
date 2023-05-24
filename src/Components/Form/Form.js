// import "../App/App.css";
// import { useState } from "react";

// const Form = (props) => {
//   const [sortType, setSortType] = useState({ value: "" });
//   console.log(sortType);
//   console.log(props);

//   const handleChange = (event) => {
//     setSortType({ value: event.target.value });
//   };

//   if (sortType.value === "Low") {
//     const sorted = props.allItems.sort((a, b) => a.price - b.price);
//     // console.log("<>>>>>>>>", sorted);
//     // props.setFilteredItems(sorted);
//     props.setAllItems(sorted);
//     console.log("Its been set to Low");
//   } else if (sortType.value === "High") {
//     // props.filteredItems.sort((a, b) => b.price - a.price);
//     console.log("Its been set to High");
//   }
//   return (
//     <div>
//       <form>
//         <select value={setSortType.value} onChange={handleChange}>
//           <option value="">Sort By</option>
//           <option value="Low">Price (Low to High)</option>
//           <option value="High">Price (High to Low)</option>
//         </select>
//       </form>
//     </div>
//   );
// };

// export default Form;
