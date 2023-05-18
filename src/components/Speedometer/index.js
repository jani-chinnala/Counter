import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  Accelerate = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  ApplyBrake = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="head">SPEEDOMETER</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <div className="miniContainer">
          <h1 className="manage">Speed is {count}mph</h1>
          <p className="para">Min Limit is 0mph,Max Limit is 200mph</p>
          <div>
            <button
              type="button"
              className="switch"
              onClick={this.Accelerate()}
            >
              Accelerate
            </button>
            <button type="button" className="click" onClick={this.ApplyBrake()}>
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Speedometer
