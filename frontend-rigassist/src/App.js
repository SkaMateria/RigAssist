import React from 'react';
import './styles/App.css';
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
			allProjects: [],
			allAnimations: [],
		}
	}

	componentDidMount() {
		Promise.all([
			fetch(USERS_URL),
			fetch(PROJECTS_URL),
			fetch(ANIMATIONS_URL)
		])
		.then(([res1, res2, res3]) => Promise.all([res1.json(), res2.json(), res3.json()]))
		.then(([users, projects, animations]) => this.setState({
			allUsers: users,
			allProjects: projects,
			allAnimations: animations
		}))
	}

	render(){
		return (
			<div>
				<NavBar/>
				<FolderNavigator/>
				<WorkBench settings={this.state.allAnimations.length === 0 ? null : this.state.allAnimations}/>
			</div>
		);
	}
}

export default App;