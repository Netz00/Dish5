import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Faq from 'react-faq-component';
import { Grow } from '@material-ui/core';
import { Loading } from './LoadingComponent';

import { fetchReservations } from '../actions/reservations';

const styles = {
  bgColor: 'transparent',
  titleTextColor: 'black',
  rowTitleColor: 'black',
  rowContentColor: 'black',
};

const config = {
  animate: true,
  tabFocus: true,
};

const ReservationComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

  const { reservations } = useSelector((state) => state);

  const data = {
    title: 'Nadolazeće rezervacije',
    rows: reservations.reservations.map((reservation) => ({
      title: `${reservation.number_of_persons} OSOBE - ${reservation.arrival_time} - ${reservation.lastname}`,
      content: `<b>Ime i prezime: </b>${reservation.firstname + reservation.lastname}<br>
      <b>Kontakt broj: </b>${reservation.contact_number}<br>
      <b>Email: </b>${reservation.email}<br>
      <p><h2>Rezervacija je potvđena &#9989<h2><p>`,
    })),
  };

  return (
    <Grow in>
      <div>
        {(reservations.isLoading && <Loading />) ||
          (reservations.errMess && <h4>{reservations.errMess}</h4>) || (
            <Faq data={data} styles={styles} config={config} />
          )}
      </div>
    </Grow>
  );
};

export default ReservationComponent;
