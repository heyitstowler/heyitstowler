const UTILITIES = {
  width: w => `w=${w}`,
  height: h => `h=${h}`,
  crop: crop => (crop ? `fit=fill` : ''),
  circle: circle => (circle ? `r=max` : ''),
  background: color => `bg=rgb:${color}`,
}

export default function formatContentfulImage(src, options = {}) {
  const params = []
  Object.entries(options).forEach(([utility, value]) => {
    if (UTILITIES[utility]) {
      params.push(UTILITIES[utility](value))
    }
  })
  return params.length ? `${src}?${params.join('&')}` : src
}
