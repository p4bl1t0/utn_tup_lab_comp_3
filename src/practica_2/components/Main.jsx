import Body from './Body';

const links = [{
    name: 'Google',
    url: 'https://google.com',
},
{
    name: 'Youtube',
    url: 'https://youtube.com',
}]

export default function Main({body}) {
  return (
    <>
      <Body body={body} />
      <nav>
          <ul>
              {links.map(link => {
               <a href={link.url}>{link.name}</a>
              })}
          </ul>
      </nav>
    </>
  )
}
