import React from 'react';
import { Tag } from 'antd';

const ListItem = ({item}) => {
  const {
    company,
    description,
    location,
    mode,
    position,
    price,
    replyRate,
    skills
  } = item;
  let color;

  switch (mode) {
    case 'full-time': 
      color = '#55a8fd';
      break;
    case 'part-time': 
      color = '#f5ad41';
      break;
    case 'hourly':
      color = '#56d48f';
      break;
  }
  
  return (
    <div className="listItem">
      <div className="listItem__header">
        <h3 className="listItem__role">{position}</h3>
        <Tag className="listItem__roleTag" color={color }>{mode}</Tag>
        <div className="listItem__rate">
          <h3>{price}</h3>
        </div>
      </div>
      <div className="listItem__company">
        <a href="#">{company}</a>
        <span className="listItem__place">{location}</span>
      </div>
      <div className="listItem__reply">
        <p>Reply rate: <span className="listItem__bold">{ replyRate  }</span></p>
      </div>
      <div className="listItem__description">
        <p>{description}</p>
      </div>
      <div className="listItem__skils">
        {skills && skills.map(skill => <Tag key={skill} className="listItem__tag">{skill}</Tag>)}
      </div>
    </div>
  )
}

export default ListItem;
