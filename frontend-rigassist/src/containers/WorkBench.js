import React, { Component } from 'react';
import ControlPanel from './ControlPanel';
import '../styles/Animations.css'
import styles from '../styles/Components.css'

class WorkBench extends Component {
	constructor() {
		super()
		this.state = {
			style: "box"
		}	
	}


	colorChange = () => {
		// this.setState({
			// style: "box_clicked"
		// })
		let box = document.querySelector('.box')
		let style = getComputedStyle(box)
		let styleProps = (({width, height}) => ({width, height}))(style)
		console.log(styleProps)
		
	}	

	render() {
		return (
			<div>
				<div className={this.state.style} onClick={this.colorChange} ></div>
				<ControlPanel/>
			</div>
		)
	}
}
export default WorkBench