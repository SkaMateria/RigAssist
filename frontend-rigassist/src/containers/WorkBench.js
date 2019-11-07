import React, { Component } from 'react';
import ControlPanel from './ControlPanel';
import PlayerRemote from '../components/workbench/PlayerRemote'
import Box from '../components/workbench/Box'



export default class WorkBench extends Component {
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
	constructor() {
		super()
		this.handleSlider = this.handleSlider.bind(this)
		this.state = {
			stateChange: true,
			objectOrigin: {
				left: "50%",
				top: "50%",
				width: "60px",
				height: "60px",
				position: "fixed",
				color: "red",
			},
			animation: {
				name: "customAnimation",
				duration: "2s",
				timingFunction: "ease-in-out",
				delay: "0s",
				iterationCount: "infinite",
				direction: "alternate",
				fillMode: "forwards",
				playState: "running",
			},
			transform: {
				rotate: "110deg",
				scale: "1.0",
				translate: "0deg, 0deg",
				skew: "0deg, 0deg",
			},
			filter: {
				blur: "0px",
				brightness: "0.0",
				contrast: "0%",
				greyscale: "0%",
				hueRotate: "0deg",
				dropShadow: "0px 0px 0px black",
				invert: "0%",
				opacity: "0%",
				saturate: "0%",
				sepia: "0%",
			},
			keyframes: {
				prct0: {
					enabled: true,
					prct: "0%",
					left: "20%",
					top: "20%",
					transform: {
						rotate: "0deg",
						scale: "3.2, .2",
						translate: "0px, 0px",
						skew: "0deg, 0deg",
					},
					filter: {
						blur: "10px",
						brightness: "0.0",
						contrast: "10%",
						greyscale: "0%",
						hueRotate: "0deg",
						dropShadow: "0px 0px 0px black",
						invert: "0%",
						opacity: "0%",
						saturate: "0%",
						sepia: "0%",
					}
				},
				prct10: {
					emabled: false,
					prct: "10%",
					left: "0",
					top: "0",
					transform: {
						rotate: "110deg",
						scale: "1.0",
						translate: "0deg, 0deg",
						skew: "0deg, 0deg",
					},
					filter: {
						blur: "0px",
						brightness: "0.0",
						contrast: "0%",
						greyscale: "0%",
						hueRotate: "0deg",
						dropShadow: "0px 0px 0px black",
						invert: "0%",
						opacity: "0%",
						saturate: "0%",
						sepia: "0%",
					}
				},
				prct20: {
					emabled: false,
					prct: "20%",
					left: "0",
					top: "0",
					transform: {
						rotate: "110deg",
						scale: "1.0",
						translate: "0deg, 0deg",
						skew: "0deg, 0deg",
					},
					filter: {
						blur: "0px",
						brightness: "0.0",
						contrast: "0%",
						greyscale: "0%",
						hueRotate: "0deg",
						dropShadow: "0px 0px 0px black",
						invert: "0%",
						opacity: "0%",
						saturate: "0%",
						sepia: "0%",
					}
				},
				prct30: {
					emabled: false,
					prct: "30%",
					left: "0",
					top: "0",
					transform: {
						rotate: "110deg",
						scale: "1.0",
						translate: "0deg, 0deg",
						skew: "0deg, 0deg",
					},
					filter: {
						blur: "0px",
						brightness: "0.0",
						contrast: "0%",
						greyscale: "0%",
						hueRotate: "0deg",
						dropShadow: "0px 0px 0px black",
						invert: "0%",
						opacity: "0%",
						saturate: "0%",
						sepia: "0%",
					}
				},
				prct40: {
					emabled: false,
					prct: "40%",
					left: "0",
					top: "0",
					transform: {
						rotate: "110deg",
						scale: "1.0",
						translate: "0deg, 0deg",
						skew: "0deg, 0deg",
					},
					filter: {
						blur: "0px",
						brightness: "0.0",
						contrast: "0%",
						greyscale: "0%",
						hueRotate: "0deg",
						dropShadow: "0px 0px 0px black",
						invert: "0%",
						opacity: "0%",
						saturate: "0%",
						sepia: "0%",
					}
				},
				prct50: {
					emabled: false,
					prct: "50%",
					left: "0",
					top: "0",
					transform: {
						rotate: "110deg",
						scale: "1.0",
						translate: "0deg, 0deg",
						skew: "0deg, 0deg",
					},
					filter: {
						blur: "0px",
						brightness: "0.0",
						contrast: "0%",
						greyscale: "0%",
						hueRotate: "0deg",
						dropShadow: "0px 0px 0px black",
						invert: "0%",
						opacity: "0%",
						saturate: "0%",
						sepia: "0%",
					}
				},
				prct60: {
					emabled: false,
					prct: "60%",
					left: "0",
					top: "0",
					transform: {
						rotate: "110deg",
						scale: "1.0",
						translate: "0deg, 0deg",
						skew: "0deg, 0deg",
					},
					filter: {
						blur: "0px",
						brightness: "0.0",
						contrast: "0%",
						greyscale: "0%",
						hueRotate: "0deg",
						dropShadow: "0px 0px 0px black",
						invert: "0%",
						opacity: "0%",
						saturate: "0%",
						sepia: "0%",
					}
				},
				prct70: {
					emabled: false,
					prct: "70%",
					left: "0",
					top: "0",
					transform: {
						rotate: "110deg",
						scale: "1.0",
						translate: "0deg, 0deg",
						skew: "0deg, 0deg",
					},
					filter: {
						blur: "0px",
						brightness: "0.0",
						contrast: "0%",
						greyscale: "0%",
						hueRotate: "0deg",
						dropShadow: "0px 0px 0px black",
						invert: "0%",
						opacity: "0%",
						saturate: "0%",
						sepia: "0%",
					}
				},
				prct80: {
					emabled: false,
					prct: "80%",
					left: "0",
					top: "0",
					transform: {
						rotate: "110deg",
						scale: "1.0",
						translate: "0deg, 0deg",
						skew: "0deg, 0deg",
					},
					filter: {
						blur: "0px",
						brightness: "0.0",
						contrast: "0%",
						greyscale: "0%",
						hueRotate: "0deg",
						dropShadow: "0px 0px 0px black",
						invert: "0%",
						opacity: "0%",
						saturate: "0%",
						sepia: "0%",
					}
				},
				prct90: {
					emabled: false,
					prct: "90%",
					left: "0",
					top: "0",
					transform: {
						rotate: "0deg",
						scale: "1.0",
						translate: "0deg, 0deg",
						skew: "0deg, 0deg",
					},
					filter: {
						blur: "0px",
						brightness: "0.0",
						contrast: "0%",
						greyscale: "0%",
						hueRotate: "0deg",
						dropShadow: "0px 0px 0px black",
						invert: "0%",
						opacity: "0%",
						saturate: "0%",
						sepia: "0%",
					}
				},
				prct100: {
					enabled: true,
					prct: "100%",
					left: "50%",
					top: "50%",
					transform: {
						rotate: "110deg",
						scale: "2.5, 1.0",
						translate: "0px, 0px",
						skew: "10deg, 10deg",
					},
					filter: {
						blur: "1px",
						brightness: "1.0",
						contrast: "100%",
						greyscale: "0%",
						hueRotate: "0deg",
						dropShadow: "3px 3px 3px black",
						invert: "0%",
						opacity: "0%",
						saturate: "0%",
						sepia: "0%",
					}
				}
			}
		}
	}

	handleStateChange = () => {
    this.setState({
      stateChange: !this.state.stateChange
		})
  }

	handlePlay = () => {
		this.setState({
			animation: {...this.state.animation, playState: "running" }
		})
	}

	handlePause = () => {
		this.setState({
			animation: {...this.state.animation, playState: "paused" }
		})
	}
	
	handleLoop = () => {
		if (this.state.animation.iterationCount === "5"){
			const loopInfinite = () => {
				this.setState({
					animation: {...this.state.animation, iterationCount: "infinite"}
				})
			}
			loopInfinite();
		} 
		else if (this.state.animation.iterationCount === "infinite") {
			const outOfInfinite = () => {
				this.setState({
					animation: {...this.state.animation, iterationCount: "1"}
				})
			}
			outOfInfinite();
		} else {
			let newCount = parseInt(this.state.animation.iterationCount) + 1
			this.setState(() => ({
				animation: {
					...this.state.animation,
					iterationCount: newCount.toString()
				}
			}))
		}
	}

	handleDirection = () => {
		if (this.state.animation.direction === "alternate"){
			const altRev = () => {
				this.setState({
					animation: {...this.state.animation, direction: "alternate-reverse"}
				})
			}
			altRev();
		} 
		else if (this.state.animation.direction === "alternate-reverse") {
			const normal = () => {
				this.setState({
					animation: {...this.state.animation, direction: "normal"}
				})
			}
			normal();
		} 
		else if (this.state.animation.direction === "normal") {
			const reverse = () => {
				this.setState({
					animation: {...this.state.animation, direction: "reverse"}
				})
			}
			reverse();
		} else {
			this.setState(() => ({
				animation: {
					...this.state.animation,
					direction: "alternate"
				}
			}))
		}
	}

	handleSlider = (setting, value) => {
		console.log(setting, value)
		if (setting === "left") {
			this.setState(prevState => ({
				keyframes: {
					...prevState.keyframes,
					prct100: {
						...prevState.keyframes.prct100,
						left: `${value}%`
					}
				}
			}))
		}
		else if (setting === "top") {
			this.setState(prevState => ({
				keyframes: {
					...prevState.keyframes,
					prct100: {
						...prevState.keyframes.prct100,
						top: `${value}%`
					}
				}
			}))
		}
		else if (setting === "rotate") {
			this.setState(prevState => ({
				keyframes: {
					...prevState.keyframes,
					prct100: {
						...prevState.keyframes.prct100,
						transform: {
							...prevState.keyframes.prct100.transform,
							rotate: `${value*36}deg`
						}
					}
				}
			}))
		}
		else if (setting === "blur") {
			this.setState(prevState => ({
				keyframes: {
					...prevState.keyframes,
					prct100: {
						...prevState.keyframes.prct100,
						filter: {
							...prevState.keyframes.prct100.filter,
							blur: `${Math.round(value/4)}px`
						}
					}
				}
			}))
		}
		else if (setting === "brightness") {
			this.setState(prevState => ({
				keyframes: {
					...prevState.keyframes,
					prct100: {
						...prevState.keyframes.prct100,
						filter: {
							...prevState.keyframes.prct100.filter,
							brightness: `${(Math.round(value * 15) / 1000).toFixed(1)}`
						}
					}
				}
			}))
		}
		else if (setting === "contrast") {
			this.setState(prevState => ({
				keyframes: {
					...prevState.keyframes,
					prct100: {
						...prevState.keyframes.prct100,
						filter: {
							...prevState.keyframes.prct100.filter,
							contrast: `${value}%`
						}
					}
				}
			}))
		}
	}



		render(){
			return(
				<div>
					<Box 
						key={this.state.stateChange}
						object={this.state.objectOrigin}
						animation={this.state.animation}
						keyframes={this.state.keyframes}
						transform={this.state.transform}
						filter={this.state.filter}
					/>
					<PlayerRemote 
						handleStateChange={this.handleStateChange}
						handlePause={this.handlePause} 
						handleDirection={this.handleDirection}
						handlePlay={this.handlePlay} 
						handleLoop={this.handleLoop}
						animation={this.state.animation} 
					/>
					<ControlPanel handleSlider={this.handleSlider} />
			</div>
			)
		}
	}