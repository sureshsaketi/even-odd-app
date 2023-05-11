// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {number: 0}

  onIncrement = () => {
    this.setState({number: Math.ceil(Math.random() * 100)})
  }

  even = () => <p className="count-text">Count is Even</p>

  odd = () => <p className="count-text">Count is Odd</p>

  render() {
    const {number} = this.state

    return (
      <div className="bg-container">
        <div className="count-container">
          <h1>Count {number}</h1>
          {number % 2 === 0 ? this.even() : this.odd()}
          <button type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p>*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
