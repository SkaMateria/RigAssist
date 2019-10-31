import React from 'react';
import './App.css';
import NavBar from './containers/NavBar'  
import WorkBench from './containers/WorkBench';
import FolderNavigator from './containers/FolderNavigator'


function App() {
  return (
    <div>
      <NavBar/>
      <FolderNavigator/>
      <WorkBench/>
    </div>
  );
}

export default App;
