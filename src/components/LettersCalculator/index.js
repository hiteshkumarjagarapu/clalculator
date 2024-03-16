import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: ''}

  numChange = event => {
    const a = event.target.value
    this.setState({count: a})
  }

  render() {
    const {count} = this.state
    const total = count.length
    return (
      <div className="bg">
        <div>
          <h1>Calculate the Letters You enter</h1>
          <input
            type="text"
            placeholder="Enter the phrase"
            value={count}
            id="textEl"
            onChange={this.numChange}
          />
          <label htmlFor="textEl">Enter the phrase</label>
          <p>No.of letters: {total}</p>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="stop watch"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
