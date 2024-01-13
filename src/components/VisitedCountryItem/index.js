import './index.css'

const VisitedCountryItem = props => {
  const {visitedCountriesDetails, onToggleVisitStatus} = props
  const {id, name, imageUrl} = visitedCountriesDetails

  const onClickRemove = () => {
    onToggleVisitStatus(id)
  }

  return (
    <li className="visited-list-item">
      <img src={imageUrl} alt="thumbnail" className="thumbnail-image" />
      <div className="visited-countries-details">
        <p className="country-name">{name}</p>
        <button type="button" className="remove-button" onClick={onClickRemove}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountryItem
