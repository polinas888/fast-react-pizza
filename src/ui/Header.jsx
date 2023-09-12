import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import User from "../features/user/User";

function Header() {
  return (
    <div className="flex justify-between border-b border-stone-200 bg-yellow-500  px-4 py-4 text-sm uppercase sm:py-6 md:text-base">
      <Link to={"/"} className="tracking-widest">
        Fast react pizza Co.
      </Link>
      <SearchOrder />
      <User />
    </div>
  );
}

export default Header;
