import PropTypes from 'prop-types'
import pkg from '../../package.json'

const MDXImage = (props) => {
  const { folderName, fileName, alt, height, width } = props
  const path = `${pkg.homepage}/static/article-images/${folderName}/${fileName}`
  return (
    <img src={path} alt={alt} height={height} width={width} />
  )
}

MDXImage.propTypes = {
  folderName: PropTypes.string.isRequired,
  fileName: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  height: PropTypes.number,
  width: PropTypes.number
}

export default MDXImage
