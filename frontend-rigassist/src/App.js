import React from 'react';
import './App.css';
import NavBar from './containers/NavBar'  
import WorkBench from './containers/WorkBench';
import FolderNavigator from './containers/FolderNavigator'

const BASE_URL = "http://localhost:3001";
const USERS_URL = `${BASE_URL}/users`
const PROJECTS_URL = `${BASE_URL}/projects`
const ANIMATIONS_URL = `${BASE_URL}/animations`

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      allUsers: [],
      allAnimations: [],
      allProjects: []
    }
  }

  componentDidMount() {
    Promise.all([
      fetch(USERS_URL),
      fetch(PROJECTS_URL),
      fetch(ANIMATIONS_URL)
    ])
    .then(([res1, res2, res3]) => Promise.all([res1.json(), res2.json(), res3.json()]))
    .then(([data1, data2, data3]) => {
      console.log("users:",data1)
      console.log("projects:",data2)
      console.log("animations:",data3)
    })
  }
  // componentDidMount() {
  //   fetch(USERS_URL)
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data)
  //   })
  // }


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
