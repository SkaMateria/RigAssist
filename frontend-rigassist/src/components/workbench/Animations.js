import styled, {keyframes} from 'styled-components'

export const customAnimation = keyframes`
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





//: You can import this specific animation wherever you like
export const customAnimation2 = keyframes`
	0% {
		left:
			20%;
		top:
			20%;
		transform:
			rotate(0turn) scale(3.2, .2) translate(0px, 0px) skew(0deg, 0deg);
		filter:
			blur(10px) contrast(10%);
	}
	50% {
		filter:
			blur(3px) contrast(80%) drop-shadow(10px 10px 4px green);
	} 

	100% {
		left:
			50%;
		top:
			50%;
		transform: 
			rotate(3turn) scale(2.5, 1.0) translate(0px, 0px) skew(10deg, 10deg);
		filter:
			blur(110px) contrast(100%) drop-shadow(3px 3px 3px black);
	}
`