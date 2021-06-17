// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  onIncrementM = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  onIncrementB = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1>
            Bob ate <span className="count">{mango}</span> mangoes{' '}
            <span className="count">{banana}</span> bananas
          </h1>
          <div className="img-container">
            <img
              alt="mango"
              className="images"
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
            />
            <img
              alt="banana"
              className="images"
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
            />
          </div>
          <div className="button-container">
            <button
              onClick={this.onIncrementM}
              className="button"
              type="button"
            >
              Eat Mango
            </button>
            <button
              onClick={this.onIncrementB}
              className="button"
              type="button"
            >
              Eat banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
