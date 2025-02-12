import { FiHome, FiBox, FiShoppingCart } from "react-icons/fi";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link href="/" className="link">
        <FiHome />
        <span>Dashboard</span>
      </Link>
      <Link href="/products" className="link">
        <FiBox />
        <span>Products</span>
      </Link>
      <Link href="/orders" className="link">
        <FiShoppingCart />
        <span>Orders</span>
      </Link>
    </div>
  );
};

export default Sidebar