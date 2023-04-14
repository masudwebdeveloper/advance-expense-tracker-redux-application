import React from "react";

const Layout = ({ children }) => {
  const date = new Date();
  const thisYear = date.getFullYear();
  return (
    <div className="App">
      <div className="header">
        <h1>Expense Tracker</h1>
      </div>
      <div className="main">
        <div className="container">{children}</div>
      </div>
      <div className="footer">&copy;{thisYear} Learn with Sumit</div>
    </div>
  );
};

export default Layout;
