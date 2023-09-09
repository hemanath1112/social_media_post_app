import React from "react";

const Header = ({ title }) => {
  return (
    <header className="Header">
      <h1>{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: "Social Media Post ",
};
export default Header;
