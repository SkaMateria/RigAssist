import {customAnimation} from './Animations'
import '../../images/GoogleChromeicon.svg'


  const Box = styled.div.attrs(props => ({
		animationShortHand: `
			${props.animation.duration} 
			${props.animation.timingFunction} 
			${props.animation.delay} 
			${props.animation.iterationCount} 
			${props.animation.direction} 
			${props.animation.fillMode} 
			${props.animation.playState}
			`,
			object: props.object,
			keyframes: props.keyframes,
			transform: props.transform,
			filter: props.filter,
		}))
		`
			width: ${props => props.object.width}
			height: ${props => props.object.height}
			position: ${props => props.object.position}
			left: ${props => props.object.left}
			top: ${props => props.object.top}
			animation: ${customAnimation} ${props => props.animationShortHand}
			background-color: ${props => props.object.color}
		`

export default Box;