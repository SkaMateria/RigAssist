import React from 'react';
import './App.css';
import NavBar from './containers/NavBar'  
import WorkBench from './containers/WorkBench';
import FolderNavigator from './containers/FolderNavigator'

const BASE_URL = "http://localhost:3001";
const USERS_URL = `${BASE_URL}/users`
const PROJECTS_URL = `${BASE_URL}/projects`
const ANIMATIONS_URL = `${BASE_URL}/animations`

let something = "nothing"
class App extends React.Component {
  constructor(){
    super()
    this.state = {
      allUsers: [],
      allAnimations: [],
    }
  }


  componentDidMount() {
    fetch(USERS_URL)
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
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
