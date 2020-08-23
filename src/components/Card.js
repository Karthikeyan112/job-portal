import React from 'react';
import TimeTrack from '../images/TimeTrack.png';
import { Button } from 'antd';

const Card = () => {
  return (
    <div className="card">
      <img className="card__image" src={TimeTrack} alt="time track image" />
      <h3 className="card__heading">Track Time on Hubstaff</h3>
      <p className="card__pay">Pay only for the hours worked</p>
      <Button className="card__btn" type="primary" size="large">Sign Up</Button>
      <Button className="card__link" type="link" size="small">Learn more...</Button>
    </div>
  )
}

export default Card;