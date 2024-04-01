import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  onClickGenerate = () => {
    this.setState({number: Math.floor(Math.random() * 100)})
  }

  render() {
    const {number} = this.state
    console.log(number)
    return (
      <div className="main-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="button"
            type="button"
            onClick={this.onClickGenerate}
          >
            Generate
          </button>
          <p className="heading">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
