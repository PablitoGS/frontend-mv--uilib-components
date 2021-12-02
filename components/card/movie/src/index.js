import PropTypes from 'prop-types'

export default function CardMovie({src, alt, title, subtitle, description}) {
  const BASE_CLASS = 'sui-CardMovie'
  const BASE_CLASS_DESCRIPTION = `${BASE_CLASS}-description`
  return (
    <div className={BASE_CLASS}>
      <div className={`${BASE_CLASS}-image`}>
        <img src={src} alt={alt} />
      </div>

      <div className={BASE_CLASS_DESCRIPTION}>
        <h2 className={`${BASE_CLASS_DESCRIPTION}Title`}>{title}</h2>
        <span className={`${BASE_CLASS_DESCRIPTION}Subtitle`}>{subtitle}</span>
        <p className={`${BASE_CLASS_DESCRIPTION}Text`}>{description}</p>
      </div>
    </div>
  )
}

CardMovie.displayName = 'CardMovie'
CardMovie.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string
}
