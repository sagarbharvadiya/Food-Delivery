import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <>

      <div className={isDanger ? 'countdown danger' : 'countdown'}>
        <li><span>{value}</span></li>
        <span>{type}</span>
      </div>



    </>
  );
};

export default DateTimeDisplay;