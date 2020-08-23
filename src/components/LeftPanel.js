import React, { useState } from 'react';
import { Checkbox, Input, Select, Slider, Button } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { Option } = Select;

const LeftPanel = ({ skills }) => {
  const experienceLevel = ['Beginer(1-3yrs)', 'intermediate(3-5yrs)', 'Expert(5+yrs)'];
  const allCountries = ['india', 'USA', 'UK', 'France'];
  const allLanguages = ['English', 'French', 'Tamil']
  const allOptions = ['Hourly', 'Part-time (20hrs/wk)', 'Full-time (40hrs/wk)'];

  const [selectedSkills, setSelectedSkills] = useState(['UI', 'JavaScript', 'React', 'Photoshop'])
  const [availability, setAvailability] = useState(allOptions)
  const [expLevel, setExpLevel] = useState('');
  const [countries, setCountries] = useState([]);
  const [languages, setLanguages] = useState(['English']);
  const [jobType, setJobType] = useState([]);
  const [minPayRate, setMinPayRate] = useState(18);
  const [maxPayRate, setMaxPayRate] = useState(32);


  const handlePayRateChange = (value) => {
    setMinPayRate(value[0]);
    setMaxPayRate(value[1]);
  };

  const clearPayRate = () => {
    setMinPayRate(0);
    setMaxPayRate(40);
  };

  const clearAll = () => {
    setSelectedSkills([]);
    setAvailability([]);
    setJobType('');
    clearPayRate();
    setExpLevel('');
    setCountries([]);
    setLanguages([]);
  };

  return (
    <div className="filter">
      <div className="filter__header bottom-brder">
        <h3>Filters</h3>
        <Button className="filter__clear" type="link" size="small" onClick={clearAll}>Clear all</Button>
      </div>
      <div className="filter__header">
        <h3>Skills</h3>
        <Button className="filter__clear" type="link" size="small" onClick={() => setSelectedSkills([])}>Clear</Button>
      </div>
      <Select
        mode="multiple"
        style={{ width: '100%' }}
        placeholder="Please select"
        value={selectedSkills}
        onChange={(value) => setSelectedSkills(value)}
      >
        {skills && skills.map(skill => <Option key={skill}>{skill}</Option>)}
      </Select>

      <div className="filter__header">
        <h3>Availability <ExclamationCircleOutlined /></h3>
        <Button className="filter__clear" type="link" size="small" onClick={() => setAvailability([])}>Clear</Button>
      </div>
      <Checkbox.Group className="filter__checkbox" options={allOptions} value={availability} onChange={(value) => setAvailability(value)} />
      <div className="filter__header">
        <h3>Job Type <ExclamationCircleOutlined /></h3>
        <Button className="filter__clear" type="link" size="small" onClick={() => setJobType('')}>Clear</Button>
      </div>
      <Select
        style={{ width: '100%' }}
        placeholder="Please select"
        value={jobType}
        onChange={(value) => setJobType(value)}
      >
        {allOptions.map(option => <Option key={option}>{option}</Option>)}
      </Select>
      <div className="filter__header">
        <h3>Pay rate/hr ($)</h3>
        <Button className="filter__clear" type="link" size="small" onClick={clearPayRate}>Clear</Button>
      </div>
      <div className="slider__inputs">
        <Input placeholder="minValue" value={minPayRate} />
        <span> - </span>
        <Input placeholder="maxValue" value={maxPayRate} />
        <span>USD</span>
      </div>
      <Slider
        marks={{0: '0', 40: '40+'}}
        range
        max={40}
        value={[minPayRate, maxPayRate]}
        onChange={handlePayRateChange}
        // onAfterChange={onAfterChange}
      />
      <div className="filter__header">
        <h3>Experience level</h3>
        <Button className="filter__clear" type="link" size="small" onClick={() => setExpLevel('')}>Clear</Button>
      </div>
      <Select
        style={{ width: '100%' }}
        placeholder="Please select"
        value={expLevel}
        onChange={(value) => setExpLevel(value)}
      >
        {experienceLevel.map(explevel => <Option key={explevel}>{explevel}</Option>)}
      </Select>
      <div className="filter__header">
        <h3>Countries</h3>
        <Button className="filter__clear" type="link" size="small" onClick={() => setCountries([])}>Clear</Button>
      </div>
      <Select
        mode="multiple"
        style={{ width: '100%' }}
        placeholder="Please select"
        value={countries}
        onChange={(value) => setCountries(value)}
        >
        {allCountries.map(country => <Option key={country}>{country}</Option>)}
      </Select>
      <div className="filter__header">
        <h3>Languages</h3>
        <Button className="filter__clear" type="link" size="small" onClick={() => setLanguages([])}>Clear</Button>
      </div>
      <Select
        mode="multiple"
        style={{ width: '100%' }}
        placeholder="Please select"
        value={languages}
        onChange={(value) => setLanguages(value)}
      >
        {allLanguages.map(language => <Option key={language}>{language}</Option>)}
      </Select>
    </div>
  )
}

export default LeftPanel;