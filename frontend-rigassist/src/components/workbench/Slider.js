import React, {Component} from 'react'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';



export class AnimationSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      animationStage: this.props.animationStage
    };
  }
  onSliderChange = (value) => {
    this.setState({
      value,
    });
  }
  onAfterChange = (value) => {
    let x = this.props.setting()
    this.props.animationStage === 0 ? 
      this.props.sliderHandle0(x, value)
      :
      this.props.sliderHandle100(x, value)
  }


  render() {
    return (
      <Slider 
        value={this.state.value}
        onChange={this.onSliderChange} 
        onAfterChange={this.onAfterChange}
      />
    );
  }
}

export default AnimationSlider