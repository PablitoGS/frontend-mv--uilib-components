import PropTypes from 'prop-types'

const HeaderSearch = ({
  handleClick,
  value,
  handleChange,
  placeholder,
  textButton
}) => {
  return (
    <div className="sui-HeaderSearch">
      <input
        className="sui-HeaderSearch-input"
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
      <button className="sui-HeaderSearch-button" onClick={handleClick}>
        {textButton}
      </button>
    </div>
  )
}

HeaderSearch.displayName = 'HeaderSearch'
HeaderSearch.propTypes = {
  handleClick: PropTypes.func,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  placeholder: PropTypes.string,
  textButton: PropTypes.string
}

export default HeaderSearch
