import React, { Component } from 'react'

class ControlledInput extends Component {
  state = {
    value: "",
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    }, () => console.log("new state is:",this.state.value))
  }

  handleSubmit = event => {
    event.preventDefault()
    // this.sendFormDataSomewhere(this.state)
  }

  render() {
    console.log("state in render is:",this.state.value)
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input type="text" onChange={this.handleChange} value={this.state.value} />
      </form>
    )
  }
}

export default ControlledInput
