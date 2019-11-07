import React, {Component} from 'react'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


function log(value) {
  console.log(value); 
}

/** Things To Animate
 *: left: 0-100%
 *: top: 0-100%
 *? transform.rotate: -720deg - 720deg (90)
 *: filter.blur: 0px - 20px
 *: filter.brightness: 0.0 - 1.0 (.1)
 *: filter.contrast: 0-100%
 *? 
 *? 
 */
export class AnimationSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }
  onSliderChange = (value) => {
    log(value);
    this.setState({
      value,
    });
  }
  onAfterChange = (value) => {
    // console.log(value);
    let x = this.props.setting()
    this.props.sliderHandle(x, value)
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