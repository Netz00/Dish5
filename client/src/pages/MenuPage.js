import React from 'react';
import { Loading } from '../components/LoadingComponent';
import Dishdetail from '../components/DishdetailComponent';
import MenuNavbar from '../components/MenuNavbar';

const Menu = (props) => {
  const menu = props.dishes.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-1 mt-4">
        <Dishdetail dish={dish} />
      </div>
    );
  });

  const menuList = props.menus.map((menu) => {
    return <MenuNavbar title={menu.title} menuId={menu.id} />;
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h3>Meni</h3>
          <hr />
        </div>
      </div>
      <div className="row">{menuList}</div>
      {(props.dishes.isLoading && <Loading />) ||
        (props.dishes.errMess && <h4>{props.dishes.errMess}</h4>) || (
          <div className="row">{menu}</div>
        )}
    </div>
  );
};

export default Menu;
