import PropTypes from 'prop-types'

const LayoutBase = ({children}) => {
  return <main className="sui-LayoutBase">{children}</main>
}

LayoutBase.displayName = 'LayoutBase'

LayoutBase.propTypes = {
  children: PropTypes.node
}

export default LayoutBase
