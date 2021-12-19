import React from 'react';

const MenuNavbar = ({ title, menuId }) => {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a class="nav-link active" aria-current="page" href={`/menu/${menuId}`}>
          {title}
        </a>
      </li>
    </ul>
  );
};

export default MenuNavbar;
