import PropTypes from 'prop-types'
import { Fragment } from 'react'
import MasonryLayout from './MasonryLayout'

function unNestImages(images) {
  const unNested = []
  images.forEach(image => {
    if (image.file) {
      unNested.push(image)
    } else if (image.files) {
      image.files.forEach(img => {
        unNested.push({ ...img, href: image.href })
      })
    }
  })
  return unNested
}

function InstagramTileGrid({ images }) {
  return (
    <MasonryLayout>
      {unNestImages(images).map(image => {
        if (image.file) {
          return <TileImage key={image.id} {...image.file} href={image.href} />
        }
        if (image.files) {
          return (
            <Fragment key={image.id}>
              {image.files.map(img => (
                <TileImage key={img.id} {...img.file} href={image.href} />
              ))}
            </Fragment>
          )
        }
        return null
      })}
    </MasonryLayout>
  )
}

function TileImage({ src, alt, href }) {
  return (
    <a href={href}>
      <img src={src} alt={alt} />
    </a>
  )
}

TileImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
}

InstagramTileGrid.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      file: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
      }),
      files: PropTypes.arrayOf(
        PropTypes.shape({
          file: PropTypes.shape({
            src: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired,
          }),
          mediaType: PropTypes.string.isRequired,
          caption: PropTypes.string,
          id: PropTypes.string.isRequired,
        })
      ),
      href: PropTypes.string.isRequired,
      mediaType: PropTypes.string.isRequired,
      caption: PropTypes.string,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}

export default InstagramTileGrid
