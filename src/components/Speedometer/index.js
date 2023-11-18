import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onClickedAccelerateButton = () => {
    this.setState(prevState =>
      prevState.speed < 200 ? {speed: prevState.speed + 10} : {speed: 200},
    )
  }

  onClickedDecelerateButton = () => {
    this.setState(prevState =>
      prevState.speed > 0 ? {speed: prevState.speed - 10} : {speed: 0},
    )
  }

  render() {
    const {speed} = this.state
    console.log(speed)
    console.log(typeof speed)
    return (
      <div className="bg-container">
        <div className="text-container">
          <h1 className="title">Speedometer</h1>
          <img
            className="img"
            alt="speedometer"
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          />
          <h1 className="sub-title">
            Speed is <span>{speed}</span>mph
          </h1>
          <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="buttons-container">
            <button
              type="button"
              onClick={this.onClickedAccelerateButton}
              className="btn btn-accelerate"
            >
              Accelerate
            </button>
            <button
              type="button"
              onClick={this.onClickedDecelerateButton}
              className="btn btn-brake"
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
