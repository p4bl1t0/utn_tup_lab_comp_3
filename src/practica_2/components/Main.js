import React from 'react';
import Body from './Body';

const Main = ({pageBody, links}) => {
  return (
    <div>
      <Body pageBody = {pageBody + ' ¡Gracias por visitar mi sitio web!'} />
        <nav>
            <ul>
                <li>
                  <a href={links[0]}>{links[0]}</a>
                </li>
                <li>
                  <a href={links[1]}>{links[1]}</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Main;