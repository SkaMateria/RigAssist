import React from 'react'
import styled, {keyframes} from 'styled-components'

const rotate = keyframes`
	0% {
		transform:
			rotate(0deg) scale(0.0)
	}

	100% {
		transform: 
			rotate(360deg) scale(1.5)
	}
`

const Box = styled.div.attrs(props => ({
	color: props.state.color,
	animationLength: props.state.animationLength,
}))`
	width: 50px
	height: 50px
	position: relative
	left: 0%
	bottom: 0px
	margin: 0 auto
	background-color: ${props => props.color}
	animation: ${rotate} ${props => props.animationLength}
	animation-play-state: ${props => props.animationPlayState}
`
		/*//& --NOTE--
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
			animationLength: "2s ease-in-out infinite normal",
			animationPlayState: "running"
		}
	}
	
	
	pauseClick = () => {
		
	}

  render() {
		return(
			<div>
        <Box onClick={this.pauseClick} state={this.state} ></Box>
			</div>
    )
  }
}


