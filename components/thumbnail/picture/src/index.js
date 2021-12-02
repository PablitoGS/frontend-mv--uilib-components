import PropTypes from 'prop-types'
import {Link} from '@s-ui/react-router'

export default function ThumbnailPicture({src, alt, caption, path}) {
  return (
    <Link to={path}>
      <figure className="sui-ThumbnailPicture">
        <div className="sui-ThumbnailPicture-image">
          <img src={src} alt={alt} />
        </div>
        <figcaption className="sui-ThumbnailPicture-title">
          {caption}
        </figcaption>
      </figure>
    </Link>
  )
}

ThumbnailPicture.displayName = 'ThumbnailPicture'
ThumbnailPicture.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  caption: PropTypes.string,
  path: PropTypes.string
}
