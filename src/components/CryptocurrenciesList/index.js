// Write your JS code here
import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  renderfirst() {
    const {cryptoList} = this.props
    return (
      <div className="heads-container">
        <p className="type">Coin Type</p>
        <div className="type-container">
          <p className="usd">USD</p>
          <p className="euro">EURO</p>
        </div>
      </div>
    )
  }

  renderSecondView() {
    const {cryptoList} = this.props
    return (
      <div className="lists-container">
        {this.renderfirst()}
        <ul className="list-container">
          {cryptoList.map(each => (
            <CryptocurrencyItem key={each.id} itemDetails={each} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="main-container">
        <h1 className="main-heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="image"
        />
        {this.renderSecondView()}
      </div>
    )
  }
}

export default CryptocurrenciesList
