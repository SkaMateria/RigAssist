import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import ControlPanel from './ControlPanel';
import '../styles/Animations.css'
import styles from '../styles/Components.css'
import styled, {keyframes} from 'styled-components'

class WorkBench extends Component {
	constructor() {
		super()
		this.state = {
			style: "box"
		}	
	}
	
	
	const Ball = styled.div`
		width: 64px;
		height: 64px;
		border-radius: 50%;
		margin: 0 auto;
		backgroundColor: red;
	`
	colorChange = () => {
		// let box = document.querySelector('.box')
		// let style = getComputedStyle(box)
		// let styleProps = (({width, height, backgroundColor}) => ({width, height, backgroundColor}))(style)
		// console.log("before click:",styleProps)
		// this.setState({
		// 	style: "box_clicked"
		// })
		// console.log("after click:", styleProps)			
		// let x = this	
		// let node = ReactDOM.findDOMNode(this.firstElementChild)
		// debugger
		// let x = getComputedStyle(node)
		// console.log(node)
	}	

	
	render() {
		return (
			<div>
				<div className={this.state.style} onClick={this.colorChange} ></div>
				<Ball/>
				<ControlPanel/>
			</div>
		)
	}
}
export default WorkBench