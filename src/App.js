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

const { Search } = Input;

function App() {
  const [data, setData] = useState([]);
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const result = await axios('data.json');
      const allSkills = getSkills(result.data);
      const skillSet = new Set(allSkills);
      setSkills(Array.from(skillSet));
      setData(result.data);
    }
    fetchData();
  }, []);
  const getSkills = (items) => {
    const allSkills = items && items.reduce((acc, item) => [...acc, ...item.skills], []);
    return allSkills;
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
          <LeftPanel skills={skills} />
          <MainContainer data={data} />
          <RightPanel />
        </div>
      </div>
    </div>
  );
}

export default App;
