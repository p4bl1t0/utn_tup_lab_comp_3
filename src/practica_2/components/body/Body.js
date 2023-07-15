import React from 'react'

const Body = ({Body, links}) => {
  return (
    <>
      <nav>
      {links.map((link) => (
        <ul><a href={link.enlace}>{link.name}</a></ul>

      ))}
      </nav>
      {Body}
    </>
  )
}

export default Body