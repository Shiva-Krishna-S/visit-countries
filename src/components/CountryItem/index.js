import './index.css'

const CountryItem = props => {
  const {countryDetails, onToggleVisitStatus} = props
  const {id, name, isVisited} = countryDetails

  const onClickStatus = () => {
    onToggleVisitStatus(id)
  }

  return (
    <li className="list-item">
      <p className="country-name">{name}</p>
      <>
        {isVisited ? (
          <p className="visit-status">Visited</p>
        ) : (
          <button
            type="button"
            className="visit-button"
            onClick={onClickStatus}
          >
            Visit
          </button>
        )}
      </>
    </li>
  )
}

export default CountryItem
