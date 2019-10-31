import React from 'react';
import './App.css';
import NavBar from './containers/NavBar'  
import WorkBench from './containers/WorkBench';
import FolderNavigator from './containers/FolderNavigator'

const URL = ""

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      allUsers: [],
      allAnimations: [],
    }
  }




  render(){
    return (
      <div>
        <NavBar/>
        <FolderNavigator/>
        <WorkBench/>
      </div>
    );
  }
}

export default App;
