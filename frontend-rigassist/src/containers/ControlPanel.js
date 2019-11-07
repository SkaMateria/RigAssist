import React, { Component } from 'react'
import AnimationSlider from '../components/workbench/Slider'
import '../styles/ControlPanel.css'

export class ControlPanel extends Component {
	constructor(){
		super()
		this.state = {
			
		}
	}
	
	
	render() {
		return (
			<div className='divGrid' >
				<AnimationSlider />
				<AnimationSlider />
				<AnimationSlider />
				<AnimationSlider />
				<AnimationSlider />
				<AnimationSlider />
				<AnimationSlider />
				<AnimationSlider />
				<AnimationSlider />
				<AnimationSlider />
				<AnimationSlider />
				<AnimationSlider />
			</div>
		)
	}
}

export default ControlPanel     