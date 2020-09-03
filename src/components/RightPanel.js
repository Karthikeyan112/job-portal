import React from 'react';

import Card from './Card';
import Job from './Job';

const RightPanel = () => {
  return (
    <div className="job">
      <Card />
      <div className="job__catagory">
        <h3 className="job__heading">TOP JOBS</h3>
        <hr />
        <Job
          role="Senior Ruby on Rails engineer"
          price="$60/hr"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        />
        <Job
          role="Senior Product designer"
          price="$45/hr"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        />
      </div>
      <div className="job__catagory">
        <h3 className="job__heading">MOST VIEWED THIS WEEK</h3>
        <hr />
        <Job
          role="Senior Ruby on Rails engineer"
          price="$60/hr"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        />
        <Job
          role="Senior Product designer"
          price="$45/hr"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        />
      </div>
      
    </div>
  )
}

export default RightPanel;