import React from 'react'

const GlobalFilter = ({filter, setFilter}) => {
  return (
    <span>
      Search:{' '}
      <input value={filter || ''} onChange={(e) => setFilter(e.filter.value)}/>
    </span>
  )
}

export default GlobalFilter
