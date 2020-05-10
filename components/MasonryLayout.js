import PropTypes from 'prop-types'

function getMasonryLayout(children, colsNumber, gap) {
  // eslint-disable-next-line no-unused-vars
  const columns = Array.from(new Array(colsNumber), _ => [])

  children.forEach((child, index) => {
    const columnIndex = index % colsNumber
    columns[columnIndex].push(
      <li key={index} style={{ marginBottom: `${gap}px` }}>
        {child}
      </li>
    )
  })

  return columns.map((col, index) => (
    <div
      key={index}
      style={{
        marginLeft: `${index ? gap : 0}px`,
        flex: 1,
      }}
    >
      {columns[index]}
    </div>
  ))
}

function MasonryLayout({ children, cols = 3, gap = 0 }) {
  return <ul className="flex">{getMasonryLayout(children, cols, gap)}</ul>
}

MasonryLayout.propTypes = {
  children: PropTypes.node.isRequired,
  cols: PropTypes.number,
  gap: PropTypes.number,
}

export default MasonryLayout
