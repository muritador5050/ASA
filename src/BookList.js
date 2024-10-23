import { Link, Outlet } from "react-router-dom";
export default function BookList() {
  return (
    <>
      <aside>
        <li>
          <Link to="/newbook">Newbook</Link>
        </li>
        <li>
          {/* <Link to="/books">Books</Link> */}
        </li>
      </aside>
      <h1>BookList</h1>
      <Outlet />
    </>
  );
}
