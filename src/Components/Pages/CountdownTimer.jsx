import React from 'react';

import DateTimeDisplay from './DateTimeDisplay';
import { useCountdown } from '../Pages/useCountdown';
import OfferProducts from './OfferProducts';


const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      <ul>
        <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
        <li></li>

        <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
        <li></li>

        <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
        <li></li>

        <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
      </ul>

    </div>
  );
};
const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  }
  else {
    return (
      <>
        <section className='Deal-off'>
          <div className=' container'>
            <div className='timer counter'>
              <h4>We Offer A Hot Deal Offer Every Festival</h4>
              <h1 id='head'>Deal off the day</h1>
            </div>
            <ShowCounter
              days={days}
              hours={hours}
              minutes={minutes}
              seconds={seconds}
            />
            <div className='button-bar pt-20'>
              <a className='btn' href="#btn"><span>Shop Now</span></a>
            </div>
          </div>
        </section>
        <OfferProducts/>
      </>
    );
  }
};

export default CountdownTimer;