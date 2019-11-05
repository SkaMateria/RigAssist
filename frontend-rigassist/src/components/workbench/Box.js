import styled, {keyframes} from 'styled-components'

const customAnimation = keyframes`
	0% {
		left:
			40%;
		top:
			40%;
		transform:
			rotate(0turn) scale(0.2, .2) translate(0px, 0px) skew(0deg, 0deg);
		filter:
			blur(10px) contrast(10%);
	}
	50% {
		filter:
			blur(3px) contrast(80%) drop-shadow(10px 10px 4px black);
	} 

	100% {
		left:
			50%;
		top:
			50%;
		transform: 
			rotate(3turn) scale(2.5, 1.0) translate(0px, 0px) skew(10deg, 10deg);
		filter:
			blur(1px) contrast(100%) drop-shadow(1px 1px 2px white);
	}
`

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


  const Box = styled.div.attrs(prp => ({
  superShort: `
    ${prp.state.duration} 
    ${prp.state.timingFunction} 
    ${prp.state.delay} 
    ${prp.state.iterationCount} 
    ${prp.state.direction} 
    ${prp.state.fillMode} 
    ${prp.state.playState}
    `
}))`
	width: 60px
	height: 60px
	position: fixed
	left: 50%
	top: 50%
	margin: 0 auto
	animation: ${customAnimation} ${prp => prp.superShort}
	background-color: blue
`

export default Box;