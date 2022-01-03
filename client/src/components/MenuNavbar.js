import React from 'react';

const MenuNavbar = ({ title, menu_id }) => {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a class="nav-link active" aria-current="page" href={`/menu/${menu_id}`}>
          {title}
        </a>
      </li>
    </ul>
  );
};

export default MenuNavbar;
