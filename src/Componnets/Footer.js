import React from "react";

const Footer = () => {
  const date = new Date()
  return <footer className="Footer">
    <p>Copyrights &copy; {date.getFullYear()}</p>
  </footer>;
};

export default Footer;
