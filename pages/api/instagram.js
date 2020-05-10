import axios from 'axios'
// import fs from 'fs'

const MEDIA_URL = `https://graph.instagram.com/v1.0/17841402326598243/media?access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}&pretty=1&fields=id,caption,media_url,media_type,thumbnail_url,permalink,children{id,media_url,media_type,permalink}&limit=25`
const getPaginatedFetch = (suffix = '') =>
  `${MEDIA_URL}${suffix && '&'}${suffix}`

function formatImage({
  media_url: mediaUrl,
  permalink,
  caption,
  children,
  media_type: mediaType,
  ...rest
}) {
  const data = {}
  if (mediaType === 'CAROUSEL_ALBUM') {
    data.files = children.data.map(formatImage)
  } else {
    data.file = { src: mediaUrl, alt: caption }
  }
  return { ...data, href: permalink, mediaType, caption, ...rest }
}

export default async (req, res) => {
  const { page = {} } = req.query
  const querySuffix = Object.entries(page).length
    ? Object.entries(page)[0].join('=')
    : ''
  const url = getPaginatedFetch(querySuffix)
  const {
    data: {
      data,
      paging: { cursors: { before, after } = {}, next, previous } = {},
    },
  } = await axios.get(url)
  const response = { images: data.map(formatImage) }
  if (previous) {
    response.before = before
  }
  if (next) {
    response.after = after
  }
  // fs.writeFileSync('./honey-data.js', JSON.stringify(response))
  res.json(response)
}
