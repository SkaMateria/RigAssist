import React from 'react';

class Form extends React.Component {
  state = {
    left: holder,
    top: holder,
    scale: holder,
    rotate: holder,
    blur: holder,
    opacity: holder,
    brightness: holder,
    contrast: holder,
  }

  handleLeftChange = event => {
    this.setState({
      left: event.target.value
    })
  }
  handleTopChange = event => {
    this.setState({
      top: event.target.value
    })
  }
  handleScaleChange = event => {
    this.setState({
      scale: event.target.value
    })
  }
  handleRotateChange = event => {
    this.setState({
      rotate: event.target.value
    })
  }
  handleBlurChange = event => {
    this.setState({
      blur: event.target.value
    })
  }
  handleOpacityChange = event => {
    this.setState({
      opacity: event.target.value
    })
  }
  handleBrightnessChange = event => {
    this.setState({
      brightness: event.target.value
    })
  }
  handleContrastChange = event => {
    this.setState({
      contrast: event.target.value
    })
  }

  render() {
    return (
      <form>
        <input type="text" name="left" onChange={event => this.handleLeftChange(event)} value={this.state.left} />
        <input type="text" name="top" onChange={event => this.handleTopChange(event)} value={this.state.top} />
        <input type="text" name="scale" onChange={event => this.handleScaleChange(event)} value={this.state.scale} />
        <input type="text" name="rotate" onChange={event => this.handleRotateChange(event)} value={this.state.rotate} />
        <input type="text" name="blur" onChange={event => this.handleBlurChange(event)} value={this.state.blur} />
        <input type="text" name="opacity" onChange={event => this.handleOpacityChange(event)} value={this.state.opacity} />
        <input type="text" name="brightness" onChange={event => this.handleBrightnessChange(event)} value={this.state.brightness} />
        <input type="text" name="contrast" onChange={event => this.handleContrastChange(event)} value={this.state.contrast} />
      </form>
    )
  }
}