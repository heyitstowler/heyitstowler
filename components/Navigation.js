import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { PROFILE_PIC_SRC } from '../lib/constants'
import formatContentfulImage from '../utils/contentful-images'

function Navigation({ items }) {
  return (
    <nav className="p-3">
      <ul className="flex items-center">
        <HomeNavItem />
        {items.map(NavItem)}
      </ul>
    </nav>
  )
}

Navigation.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}

export default Navigation

function NavItem({ title, href }) {
  return (
    <li className="mr-3">
      <Link href={href}>
        <a>{title}</a>
      </Link>
    </li>
  )
}

function HomeNavItem() {
  return (
    <li className="mr-4">
      <Link href="/">
        <a className="block">
          <img
            className="w-50 bg-black border-black border-solid border-2 rounded-full block"
            src={formatContentfulImage(PROFILE_PIC_SRC, {
              width: 100,
              height: 100,
              crop: true,
              circle: true,
              background: '000',
            })}
            alt="Chris holding Honey in a hotdog costume"
          />
        </a>
      </Link>
    </li>
  )
}

HomeNavItem.propTypes = {}

NavItem.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
}
