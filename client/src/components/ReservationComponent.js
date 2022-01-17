import React from 'react';
import Faq from 'react-faq-component';

import { Grow } from '@material-ui/core';

const data = {
  title: 'Nadolazeće rezervacije',
  rows: [
    {
      title: '4 OSOBE - 23.1.2022. (13:30) - HORVAT',
      content: `<b>Ime i prezime: </b>Karla Horvat<br>
      <p><b>Kontakt broj: </b>0951234567</p>
      <p><b>Email: </b>karlahorvat@gmail.com</p>
      <h1>Rezervacija je potvđena &#9989</h1>`,
    },
    {
      title: '5 OSOBA - 23.1.2022. (17:00) - ČEKO',
      content: `<b>Ime i prezime: </b>Karla Horvat<br>
      <p><b>Kontakt broj: </b>0951234567</p>
      <p><b>Email: </b>harlahorvat@gmail.com</p>
      <h1>Rezervacija je potvđena &#9989</h1>`,
    },
    {
      title: '4 OSOBE - 23.1.2022. (17:30) - ANIĆ',
      content: `<b>Ime i prezime: </b>Karla Horvat<br>
      <p><b>Kontakt broj: </b>0951234567</p>
      <p><b>Email: </b>harlahorvat@gmail.com</p>
      <h1>Rezervacija je potvđena &#9989</h1>`,
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
