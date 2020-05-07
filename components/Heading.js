import React from 'react'
import PropTypes from 'prop-types'

const styleAsClasses = {
  1: 'text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8',
  4: 'text-center md:text-left text-lg mt-5 md:pl-8',
  2: 'text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8',
}
export default function Heading({ rank, styleAs, children }) {
  return React.createElement(
    `h${rank}`,
    { className: styleAsClasses[styleAs || rank] },
    children
  )
}

Heading.propTypes = {
  rank: PropTypes.number.isRequired,
  styleAs: PropTypes.number,
  children: PropTypes.node,
}
