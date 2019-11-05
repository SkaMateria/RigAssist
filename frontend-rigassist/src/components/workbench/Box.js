import styled, {keyframes} from 'styled-components'
import {customAnimation} from './Animations'

  /*//& --NOTE(Properties)
    //! all of these will be followed by a :
    //: opacity: 0.0-1.0 
    //: filter: blur:px || brightness:0.0-inf || contrast:0%-inf || greyscale:0%-100% || hue-rotate:0deg-359deg || 
    //: filter: drop-shadow(infpx infpx infpx color) || invert: 0-100% || opacity: 0-100% || saturate:0-inf% || sepia:0-100%
    //? object-position can be %, px, or right, left top bottom center
    */
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


  const Box = styled.div.attrs(props => ({
  superShort: `
    ${props.animation.duration} 
    ${props.animation.timingFunction} 
    ${props.animation.delay} 
    ${props.animation.iterationCount} 
    ${props.animation.direction} 
    ${props.animation.fillMode} 
    ${props.animation.playState}
    `,
    object: props.object,
}))`
	width: ${props => props.object.width}
	height: ${props => props.object.height}
	position: ${props => props.object.position}
	left: ${props => props.object.left}
	top: ${props => props.object.top}
	animation: ${customAnimation} ${props => props.superShort}
	background-color: ${props => props.object.color}
`

export default Box;