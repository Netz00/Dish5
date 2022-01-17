import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Loading } from '../components/LoadingComponent';

import { fetchGroceries } from '../actions/groceries';

const Groceries = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGroceries());
  }, [dispatch]);

  const { groceries } = useSelector((state) => state);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h3>Namirnice</h3>
          <hr />
        </div>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th>Namirnica</th>
            <th>Dostupna količina</th>
            <th>Minimalna količina</th>
          </tr>
        </thead>
        {(groceries.isLoading && <Loading />) ||
          (groceries.errMess && <h4>{groceries.errMess}</h4>) ||
          groceries.groceries.map((grocery) => (
            <tr key={grocery.id}>
              <td>{grocery.name}</td>
              <td>
                {grocery.balance} {grocery.unit}
              </td>
              <td>
                {grocery.minBalance} {grocery.unit}
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default Groceries;
