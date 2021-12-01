import PropTypes from 'prop-types'

const HeaderSearch = ({handleClick, value, handleChange, placeholder}) => {
  return (
    <div className="sui-HeaderSearch">
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
      <button onClick={handleClick}>BUSCAR PELICULAS</button>
    </div>
  )
}

HeaderSearch.displayName = 'HeaderSearch'
HeaderSearch.propTypes = {
  handleClick: PropTypes.func,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  placeholder: PropTypes.string
}

export default HeaderSearch
