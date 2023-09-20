import { useSelector } from "react-redux";

function User() {
  const userName = useSelector((state) => state.user.name);

  if (!userName) return null;
  return (
    <div>
      <p className="hidden text-sm font-semibold md:block">{userName}</p>
    </div>
  );
}

export default User;
