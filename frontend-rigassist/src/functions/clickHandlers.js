
export const  handleStateChange = () => {
    this.setState({
      stateChange: !this.state.stateChange
		})
  }
  // export default handleStateChange;

export const	handlePlay = () => {
		this.setState({
			animation: {...this.state.animation, playState: "running" }
		})
  }
  // export default handlePlay;

export const	handlePause = () => {
		this.setState({
			animation: {...this.state.animation, playState: "paused" }
		})
  }
  // export default handlePause;
	
export const	handleLoop = () => {
		if (this.state.animation.iterationCount === "5"){
			this.loopInfinite();
		} 
		else if (this.state.animation.iterationCount === "infinite") {
			this.outOfInfinite();
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
  // export default handleLoop;

export const	loopInfinite = () => {
		this.setState({
			animation: {...this.state.animation, iterationCount: "infinite"}
		})
  }
  // export default loopInfinite;

export const	outOfInfinite = () => {
		this.setState({
			animation: {...this.state.animation, iterationCount: "1"}
		})
  }
  // export default outOfInfinite;


  
  
