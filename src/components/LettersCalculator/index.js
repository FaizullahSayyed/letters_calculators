import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {inputSearch: '', noOfLetters: 0}

  calculateLetters = event => {
    this.setState({inputSearch: event.target.value})
    const {inputSearch} = this.state
    this.setState({noOfLetters: inputSearch.length + 1})
  }

  render() {
    const {inputSearch, noOfLetters} = this.state

    return (
      <div className="bg-container">
        <div className="inner-container">
          <div className="input-container">
            <h1 className="main-heading">Calculate the Letters you enter</h1>
            <label className="label" htmlFor="input-box">
              Enter the phrase
            </label>
            <input
              type="text"
              className="input-box"
              id="input-box"
              value={inputSearch}
              onChange={this.calculateLetters}
              placeholder="Enter the phrase"
            />
            <p className="result-container">No.of letters: {noOfLetters}</p>
          </div>
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
              className="image"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
