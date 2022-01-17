import React from 'react';
import Faq from 'react-faq-component';
import { Grow } from '@material-ui/core';

const data = {
  title: 'Nadolazeće rezervacije',
  rows: [
    {
      title: '4 OSOBE - 23.1.2022. (13:30) - HORVAT',
      content: `<b>Ime i prezime: </b>Karla Horvat<br>
      <b>Kontakt broj: </b>0951234567<br>
      <b>Email: </b>karlahorvat@gmail.com<br>
      <p><h2>Rezervacija je potvđena &#9989<h2><p>`,
    },
    {
      title: '6 OSOBA - 23.1.2022. (13:30) - ANIĆ',
      content: `<b>Ime i prezime: </b>Karla Horvat<br>
      <b>Kontakt broj: </b>0951234567<br>
      <b>Email: </b>karlahorvat@gmail.com<br>
      <p><h2>Rezervacija je potvđena &#9989<h2><p>`,
    },
    {
      title: '5 OSOBA - 23.1.2022. (13:30) - ČEKO',
      content: `<b>Ime i prezime: </b>Karla Horvat<br>
      <b>Kontakt broj: </b>0951234567<br>
      <b>Email: </b>karlahorvat@gmail.com<br>
      <p><h2>Rezervacija je potvđena &#9989<h2><p>`,
    },
  ],
};

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
  return (
    <Grow in>
      <div>
        <Faq data={data} styles={styles} config={config} />
      </div>
    </Grow>
  );
};

export default ReservationComponent;
