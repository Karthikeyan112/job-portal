import React, {useState, useEffect} from 'react';
import axios from 'axios';
import 'antd/dist/antd.css';
import './App.scss';
import './styles/style.scss';
import { Input } from 'antd';

import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';
import MainContainer from './components/MainContainer';
import Header from './components/Header';
import Footer from './components/Footer';

const { Search } = Input;

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const result = await axios('data.json');
      const allSkills = getSkills(result.data);
      const skillSet = new Set(allSkills);
      setSkills(Array.from(skillSet));
      setData(result.data);
      setFilteredData(result.data);
    }
    fetchData();
  }, []);
  const getSkills = (items) => {
    const allSkills = items && items.reduce((acc, item) => [...acc, ...item.skills], []);
    return allSkills;
  }

  const filterByPayRate = (minVal, maxVal, actual) => {
    console.log(minVal, maxVal, actual);
    if(maxVal === 40) {
      return actual >= minVal;
    }
    return actual >= minVal && actual <= maxVal;
  }

  const filterSingleton = (actual, filter) => {
    if (!filter) {
      return true;
    }
    const [firstActual] = actual.split(' ');
    const [firstFilter] = filter.split(' ');
    return firstActual.toLowerCase() === firstFilter.toLowerCase();
  }
  const filterArray = (list, allItems) => {
    if(!allItems.length) {
      return true;
    }
    return list.some(item => allItems.includes(item));
  }
  const filterItems = (filterObject) => {
    let newList = data;
    const {
      expLevel,
      jobType,
      languages,
      maxPayRate,
      minPayRate,
      skills } = filterObject;

    newList = newList.filter(item => filterArray(item.skills, skills))
      .filter(item => filterByPayRate(minPayRate, maxPayRate,item.price))
      .filter(item => filterArray(item.languages, languages))
      .filter(item => filterSingleton(item.mode, jobType))
      .filter(item => filterSingleton(item.level, expLevel));
    
    setFilteredData(newList);
  }

  return (
    <div className="app">
      <Header />
      <div className="app__container">
        <div className="app__search">
          <Search
            placeholder="Search by keywords (PHP, .NET, graphic designer, etc. )"
            enterButton="Search"
            size="large"
            onSearch={value => console.log(value)}
          />
        </div>
        <div className="app__main">
          <LeftPanel skills={skills} filterItems={filterItems} />
          <MainContainer data={filteredData} />
          <RightPanel />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
