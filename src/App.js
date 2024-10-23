import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import BookList from "./BookList";
import "./App.css";
import Books from "./Books";
import Newbook from "./Newbook";
import Layout from "./Layout";
import Reducer from "./Reducer";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/booklist" element={<BookList />}>
          <Route path="newbook" element={<Newbook />} />
          <Route path="books" element={<Books />} />
        </Route>
        <Route path="reducer" element={<Reducer />} />
      </Route>
    </Routes>
  );
}
