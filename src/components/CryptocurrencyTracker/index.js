// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CryptoCurrenciesList from '../CryptocurrenciesList'

import './index.css'

class CryptoTracker extends Component {
  state = {currencyList: [], isTrue: true}
  componentDidMount = () => {
    this.getcurrencyList()
  }

  getcurrencyList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const filteredData = data.map(each => ({
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      id: each.id,
      currencyLogo: each.currency_logo,
    }))
    this.setState({currencyList: filteredData, isTrue: false})
  }
  render() {
    const {currencyList, isTrue} = this.state
    return (
      <div className="app-container">
        {isTrue ? (
          <div data-testid="loader">
            <Loader
              data-testid="loader"
              type="TailSpin"
              height={50}
              width={50}
              color="#ffffff"
            />
          </div>
        ) : (
          <CryptoCurrenciesList cryptoList={currencyList} />
        )}
      </div>
    )
  }
}

export default CryptoTracker
