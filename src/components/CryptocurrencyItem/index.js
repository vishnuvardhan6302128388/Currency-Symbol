// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {itemDetails} = props
  const {currencyName, usdValue, euroValue, id, currencyLogo} = itemDetails
  return (
    <li className="item-container">
      <img src={currencyLogo} alt={currencyName} className="item-images" />
      <p className="description">{currencyName}</p>

      <div className="second-container">
        <p className="description">{usdValue}</p>
        <p className="description">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
