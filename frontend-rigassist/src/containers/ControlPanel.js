import React, { Component } from 'react'
import AnimationSlider from '../components/workbench/Slider'
import '../styles/ControlPanel.css'


export class ControlPanel extends Component {
	constructor(){
		super()
		this.state = {
			
		}
	}
	
	rotateSlide(){
		return "rotate"
	}

	
	render() {
		return (
			<div className='divGrid' >
				<AnimationSlider setting={this.rotateSlide} sliderHandle={this.props.handleSlider} />
				{/* <AnimationSlider />
				<AnimationSlider />
				<AnimationSlider />
				<AnimationSlider />
				<AnimationSlider />
				<AnimationSlider />
				<AnimationSlider />
				<AnimationSlider />
				<AnimationSlider />
				<AnimationSlider />
				<AnimationSlider /> */}
			</div>
		)
	}
}

export default ControlPanel     