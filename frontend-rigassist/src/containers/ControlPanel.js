import React, { Component } from 'react'
import AnimationSlider from '../components/workbench/Slider'
import '../styles/ControlPanel.css'
import '../styles/PlayerRemote.css'
import {Button, Icon} from 'semantic-ui-react'



export class ControlPanel extends Component {
	constructor(){
		super()
		this.state = {
			animationStage: 0,
		}
	}
	
	leftSlide(){
		return "left"
	}

	topSlide(){
		return "top"
	}

	rotateSlide(){
		return "rotate"
	}

	scaleSlide(){
		return "scale"
	}

	blurSlide(){
		return "blur"
	}

	brightnessSlide(){
		return "brightness"
	}

	contrastSlide(){
		return "contrast"
	}

	opacitySlide(){
		return "opacity"
	}

	// changeAnimationStage = () => {
	// 	this.state.animationStage === 100 ? 
	// 		this.setState({
	// 			animationStage: 0
	// 		})
	// 		:
	// 		this.setState({
	// 			animationStage: 100
	// 		})
	// }

	changeAnimationStage = () => {
		if (this.state.animationStage === 0) {
			this.setState({
				animationStage: 25
			})
		}
		else if (this.state.animationStage === 25) {
			this.setState({
				animationStage: 50
			})
		}
		else if (this.state.animationStage === 50) {
			this.setState({
				animationStage: 75
			})
		}
		else if (this.state.animationStage === 75) {
			this.setState({
				animationStage: 100
			})
		}
		else if (this.state.animationStage === 100) {
			this.setState({
				animationStage: 0
			})
		}
	}

	render() {
		return (
			<div>
			<div className='divGrid' > 
				<div><AnimationSlider animationStage={this.state.animationStage} setting={this.leftSlide} sliderHandle0={this.props.handleSlider0} sliderHandle25={this.props.handleSlider25} sliderHandle50={this.props.handleSlider50} sliderHandle75={this.props.handleSlider75} sliderHandle100={this.props.handleSlider100}/>X Axis</div>
				<div><AnimationSlider animationStage={this.state.animationStage} setting={this.topSlide} sliderHandle0={this.props.handleSlider0} sliderHandle25={this.props.handleSlider25} sliderHandle50={this.props.handleSlider50} sliderHandle75={this.props.handleSlider75} sliderHandle100={this.props.handleSlider100}/>Y Axis</div>
				<div><AnimationSlider animationStage={this.state.animationStage} setting={this.scaleSlide} sliderHandle0={this.props.handleSlider0} sliderHandle25={this.props.handleSlider25} sliderHandle50={this.props.handleSlider50} sliderHandle75={this.props.handleSlider75} sliderHandle100={this.props.handleSlider100}/>Scale</div>
				<div><AnimationSlider animationStage={this.state.animationStage} setting={this.rotateSlide} sliderHandle0={this.props.handleSlider0} sliderHandle25={this.props.handleSlider25} sliderHandle50={this.props.handleSlider50} sliderHandle75={this.props.handleSlider75} sliderHandle100={this.props.handleSlider100}/>Rotation</div>
				<div><AnimationSlider animationStage={this.state.animationStage} setting={this.blurSlide} sliderHandle0={this.props.handleSlider0} sliderHandle25={this.props.handleSlider25} sliderHandle50={this.props.handleSlider50} sliderHandle75={this.props.handleSlider75} sliderHandle100={this.props.handleSlider100}/>Blur</div>
				<div><AnimationSlider animationStage={this.state.animationStage} setting={this.opacitySlide} sliderHandle0={this.props.handleSlider0} sliderHandle25={this.props.handleSlider25} sliderHandle50={this.props.handleSlider50} sliderHandle75={this.props.handleSlider75} sliderHandle100={this.props.handleSlider100}/>Opacity</div>
				<div><AnimationSlider animationStage={this.state.animationStage} setting={this.brightnessSlide} sliderHandle0={this.props.handleSlider0} sliderHandle25={this.props.handleSlider25} sliderHandle50={this.props.handleSlider50} sliderHandle75={this.props.handleSlider75} sliderHandle100={this.props.handleSlider100}/>Brightness</div>
				<div><AnimationSlider animationStage={this.state.animationStage} setting={this.contrastSlide} sliderHandle0={this.props.handleSlider0} sliderHandle25={this.props.handleSlider25} sliderHandle50={this.props.handleSlider50} sliderHandle75={this.props.handleSlider75} sliderHandle100={this.props.handleSlider100}/>Contrast</div>
			</div>
			<Button class="ui button" color='orange' onClick={this.changeAnimationStage} > <Icon name='percent'/> Animation Stage {this.state.animationStage}%</Button>
			</div>
		)
	}
}

export default ControlPanel     
//Reviewing
