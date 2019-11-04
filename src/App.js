import React, { Fragment, useEffect } from 'react';
import SearchBar from './components/search/search-bar';
import Logs from './components/logs/logs';
import AddBtn from './components/buttons/AddButton';
import AddLogModal from './components/logs/add-log-modal';
import EditLogModal from './components/logs/edit-log-modal';
import AddTechModal from './components/techs/add-tech-modal';
import TechList from './components/techs/tech-list-modal';



import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
  useEffect(()=>{
    M.AutoInit();
  });

  return (
   <Fragment>
      <SearchBar />
      <div className='container'>
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechList /> 
        <Logs />
      </div>
  </Fragment>
  );
}

export default App;
