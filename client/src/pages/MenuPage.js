import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Loading } from '../components/LoadingComponent';
import Dishdetail from '../components/DishdetailComponent';
import MenuNavbar from '../components/MenuNavbar';

import { fetchDishes } from '../actions/meals';
import { fetchMenus } from '../actions/menus';

const Menu = () => {
  const { menu_id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMenus());
    dispatch(fetchDishes());
  }, [dispatch]);

  const { dishes, menus } = useSelector((state) => state);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h3>Meni</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        {menus.menus.map((menu) => {
          return <MenuNavbar title={menu.name} menu_id={menu.id} />;
        })}
      </div>
      {(dishes.isLoading && <Loading />) ||
        (dishes.errMess && <h4>{dishes.errMess}</h4>) || (
          <div className="row">
            {dishes.dishes.map((dish) => {
              if (dish.menu_id === parseInt(menu_id, 10))
                return (
                  <div key={dish.id} className="col-12 col-md-5 m-1 mt-4">
                    <Dishdetail dish={dish} />
                  </div>
                );
              return <></>;
            })}
          </div>
        )}
    </div>
  );
};

export default Menu;
