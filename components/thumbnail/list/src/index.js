import PropTypes from 'prop-types'

const ListItem = props => {
  return <li {...props} />
}

export default function ThumbnailList({children}) {
  return <ul className="sui-ThumbnailList">{children}</ul>
}

ThumbnailList.Item = ListItem

ThumbnailList.displayName = 'ThumbnailList'
ThumbnailList.propTypes = {
  children: PropTypes.node
}
