import { Link, Outlet } from "react-router-dom";
import "./App.css";
export default function Layout() {
  return (
    <nav>
      <ul className="layout">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/booklist">BookList</Link>
        </li>
        <li>
          <Link to="/reducer">Reducer</Link>
        </li>
      </ul>
      <Outlet />
    </nav>
  );
}
