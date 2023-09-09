import React from "react";
// import { Link } from "react-router-dom";

const Nav = ({ search, setSearch }) => {
  return (
    <nav className="Nav">
      <form
        action=""
        className="searchForm"
        onSubmit={(e) => e.preventDefault()}
      >
        <label htmlFor="search">Search Post</label>
        <input
          type="text"
          id="search"
          placeholder="Search Post"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <ul>
        <li>{/* <Link to="/">Home</Link> */} Home</li>
        <li>{/* <Link to="/post">Post</Link> */}Post</li>
        <li>{/* <Link to="/about">About</Link> */}About</li>
      </ul>
    </nav>
  );
};

export default Nav;
