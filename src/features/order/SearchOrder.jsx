import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [orderNumber, setOrderNumber] = useState("");
  const navigate = useNavigate();
  console.log(orderNumber);

  function handleSearchOrder(e) {
    e.preventDefault();
    navigate(`/order/${orderNumber}`);
    setOrderNumber("");
  }

  return (
    <form onSubmit={handleSearchOrder}>
      <input
        placeholder="Search order #"
        value={orderNumber}
        onChange={(e) => setOrderNumber(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
