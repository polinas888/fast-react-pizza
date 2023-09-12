import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [orderNumber, setOrderNumber] = useState("");
  const navigate = useNavigate();

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
        className="w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
      />
    </form>
  );
}

export default SearchOrder;
