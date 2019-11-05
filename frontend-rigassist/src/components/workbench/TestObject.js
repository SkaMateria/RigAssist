import React from 'react'
import styled, {keyframes} from 'styled-components'

const customAnimation = keyframes`
	0% {
		left:
			0%;
		top:
			0%;
		transform:
			rotate(0turn) scale(0.2, .2) translate(0px, 0px) skew(0deg, 0deg);
		filter:
			blur(10px) contrast(10%);
	}

	50% {
		filter:
			blur(3px) contrast(80%) drop-shadow(100px 100px 4px black);
	} 

	100% {
		left:
			50%;
		top:
			50%;
		transform: 
			rotate(3turn) scale(2.5, 1.0) translate(0px, 0px) skew(25deg, 10deg);
		filter:
			blur(1px) contrast(100%) drop-shadow(1px 1px 8px white);
	}

`
/*//& --NOTE(Properties)
	//! all of these will be followed by a :
	//: opacity: 0.0-1.0 
	//: filter: blur:px || brightness:0.0-inf || contrast:0%-inf || greyscale:0%-100% || hue-rotate:0deg-359deg || 
	//: filter: drop-shadow(infpx infpx infpx color) || invert: 0-100% || opacity: 0-100% || saturate:0-inf% || sepia:0-100%
	//? object-position can be %, px, or right, left top bottom center
	*/

const Box = styled.div.attrs(props => ({
	color: props.state.color,
	animationShortHand: props.state.animationShortHand,
	animationPlayState: props.state.animationPlayState
}))`
	width: 60px
	height: 60px
	position: fixed
	left: 50%
	top: 50%
	margin: 0 auto
	animation: ${customAnimation} ${props => props.animationShortHand} ${props => props.animationPlayState}
	background-color: blue
`
		/*//& --NOTE(animation)--
			UrlRef = https://www.w3schools.com/cssref/css3_pr_animation.asp
			//* if the word has @ in front of it, it should read out "animation-" i.e. @duration = animation-duration
			//: animation: name | @duration | @timing-function | @delay | @iteration-count | @direction | @fill-mode | @play-state
			//! cubic-bezier: 0.0-1.0
			//? duration: in seconds || timing-function: ease/linear/ease-in/ease-out/ease-in-out/cubic-bezier(n,n,n,n)
			//? dealy: in seconds (can be negative) ||  iteration-count: 0 - infinite  ||  
			//? direction: normal/reverse/alternate/alternate-reverse
			//: fill-mode: none/forwards/backwards/both
			//: play-state: paused/running/initial/inherit
			*/



			export default class TestObject extends React.Component{
	constructor(props) {
		super(props)
		
		this.state = {
			color: this.props.backgroundColor,
			width: "64px",
			height: "64px",
			animationShortHand: "2s ease-in-out infinite alternate",
		}
	}
	
	buttonClick = () => {
			this.state.animationPlayState === "running" ? this.pauseClick() : this.playClick()
	}

	pauseClick(){
		this.setState({
			animationPlayState: "paused"
		})
	}

	playClick(){
		this.setState({
			animationPlayState: "running"
		})
	}

  render() {
		return(
			<div>
        <Box onClick={this.buttonClick} state={this.state} ></Box>
			</div>
    )
  }
}



