import React from 'react';
import { Select } from 'antd';

import ListItem from './ListItem';

const MainContainer = ({data}) => {
  const Length = data.length;
  return (
    <div className="mainContainer">
      <div className="mainContainer__header">
        <h3 className="mainContainer__left">Results({Length})</h3>
        <div className="mainContainer__right">
          <p className="mainContainer__sort">Sort by</p>
          <Select
            placeholder="Please select"
          >
            {}
          </Select>
      </div>
      </div>
      {data && data.map(item => <ListItem key={item.id} item={item}/>)}
    </div>
  )
}

export default MainContainer;