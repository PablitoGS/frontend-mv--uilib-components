import PropTypes from 'prop-types'

export default function HeaderBase({children}) {
  return (
    <div className="sui-HeaderBase">
      <header>{children}</header>
    </div>
  )
}

HeaderBase.displayName = 'HeaderBase'
HeaderBase.propTypes = {
  children: PropTypes.node
}
