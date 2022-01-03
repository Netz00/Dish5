import React from 'react';
import { Link } from 'react-router-dom';

const MenuNavbar = ({ title, menu_id }) => {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          class="nav-link active"
          aria-current="page"
          to={`/menu/${menu_id}`}
        >
          {title}
        </Link>
      </li>
    </ul>
  );
};

export default MenuNavbar;
