import React from 'react'
import { Body } from './Body'

export const Main = ({pageBody, links}) => {
  return (
    <div>
        <Body pageBody={pageBody}/>
        <nav>
            <ul>
              {links.map((link, index) => (
                <li key={index}>
                    <a href={link}>{link}</a>
                </li>
              ))}
            </ul>
        </nav>
    </div>
  );
};