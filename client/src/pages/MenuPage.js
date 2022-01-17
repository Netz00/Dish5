import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Button } from 'reactstrap';
import Create from '@material-ui/icons/Create';
import Input from '../components/Auth/Input';

import { Loading } from '../components/LoadingComponent';
import Dishdetail from '../components/DishdetailComponent';
import MenuNavbar from '../components/MenuNavbar';

import { fetchDishes, createMeal } from '../actions/meals';
import { fetchMenus, createMenu } from '../actions/menus';

const initialMenuState = {
  name: '',
};

const Menu = () => {
  const { menu_id } = useParams();

  const initialMealState = {
    name: '',
    description: '',
    price: 0,
    menu_id: menu_id,
  };

  const user = JSON.parse(localStorage.getItem('profile'));
  const loggedIn = user?.result?.username;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMenus());
    dispatch(fetchDishes());
  }, [dispatch]);

  const { dishes, menus } = useSelector((state) => state);

  const [menuForm, setMenuForm] = useState(initialMenuState);

  const handleCreateMenu = (e) => {
    e.preventDefault();

    dispatch(createMenu(menuForm));
  };

  const handleMenuChange = (e) =>
    setMenuForm({ ...menuForm, [e.target.name]: e.target.value });

  const [mealForm, setMealForm] = useState(initialMealState);

  const handleCreateMeal = (e) => {
    e.preventDefault();

    dispatch(createMeal(mealForm));
  };
  const handleMealChange = (e) =>
    setMealForm({ ...mealForm, [e.target.name]: e.target.value });

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

        {loggedIn && (
          <>
            <form onSubmit={handleCreateMenu} className="ml-2">
              <Input
                name="name"
                label="Naziv menija"
                handleChange={handleMenuChange}
              />
              <Button type="submit" size="small" color="light" className="mt-1">
                <Create fontSize="small" /> &nbsp; Dodaj meni
              </Button>
            </form>
          </>
        )}
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
            {loggedIn && (
              <div key="newMeal" className="col-12 col-md-5 m-1 mt-4">
                <form onSubmit={handleCreateMeal}>
                  <Input
                    name="name"
                    label="Naziv jela"
                    handleChange={handleMealChange}
                    half
                  />
                  <Input
                    name="description"
                    label="Opis jela"
                    handleChange={handleMealChange}
                    half
                  />
                  <Input
                    name="price"
                    label="Cijena jela"
                    handleChange={handleMealChange}
                    half
                  />
                  <Button
                    type="submit"
                    size="small"
                    color="light"
                    className="mt-1"
                  >
                    <Create fontSize="small" /> &nbsp; Dodaj jelo
                  </Button>
                </form>
              </div>
            )}
          </div>
        )}
    </div>
  );
};

export default Menu;
