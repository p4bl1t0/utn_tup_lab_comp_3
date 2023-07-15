import React from 'react'
import Header from '../header/Header'
import Main from '../main/Main'
const Page = ({site,links,frase}) => {
  return (
    <>
        <Header pageTitle={site.title} />
        <Main frase={frase} pageBody={site.body} links={links} />
    </>
  )
}

export default Page