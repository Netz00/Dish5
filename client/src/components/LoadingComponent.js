import React from 'react';

export const Loading = () => {
  return (
    <div className="col-12">
      <span className="fa fa-circle-o-notch fa-spin fa-3x fa-fw text-dark"></span>
      <p>Učitavanje...</p>
    </div>
  );
};
