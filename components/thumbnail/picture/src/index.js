import PropTypes from 'prop-types'

export default function ThumbnailPicture({src, alt, caption}) {
  return (
    <figure className="sui-ThumbnailPicture">
      <div className="sui-ThumbnailPicture-image">
        <img src={src} alt={alt} />
      </div>
      <figcaption className="sui-ThumbnailPicture-title">{caption}</figcaption>
    </figure>
  )
}

ThumbnailPicture.displayName = 'ThumbnailPicture'
ThumbnailPicture.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  caption: PropTypes.string
}
