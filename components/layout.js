import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import Navigation from './Navigation'

const navItems = [
  {
    title: 'Blog',
    href: '/posts',
  },
  {
    title: 'Projects',
    href: '/projects',
  },
  {
    title: 'Board Games',
    href: '/board-games',
  },
  {
    title: 'My Dog',
    href: '/honey',
  },
  {
    title: 'Karaoke',
    href: '/karaoke',
  },
]

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <Navigation items={navItems} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
