import React from "react";
import { Link } from "react-router-dom";

const ListLink = ({ to, isActive, num, name }) => {
  return (
    <>
      <li className={`list-item ${isActive}`}>
        <Link to={to}>
          <span>{num}</span>
          {name}
        </Link>
        <div className="hoverList"></div>
      </li>
    </>
  );
};

export default ListLink;
