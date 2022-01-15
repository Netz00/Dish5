import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { useDispatch } from 'react-redux';

import DeleteIcon from '@material-ui/icons/Delete';

import { deleteMenu } from '../actions/menus';

const MenuNavbar = ({ title, menu_id }) => {
  const user = JSON.parse(localStorage.getItem('profile'));

  const loggedIn = user?.result?.username;
  const dispatch = useDispatch();

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        {loggedIn && (
          <Button
            size="small"
            color="secondary"
            onClick={() => dispatch(deleteMenu(menu_id))}
          >
            <DeleteIcon fontSize="small" /> &nbsp; Delete
          </Button>
        )}
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
