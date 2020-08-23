import React from 'react';

const Job = ({role, price, desc}) => {
  return (
    <div className="job__details">
      <div className="job__role">
        <h3 className="job__item">{role}</h3>
        <h3 className="job__item">{price}</h3>
      </div>
      <p className="job__desc">{desc}</p>
    </div>
  )
}

export  default Job;