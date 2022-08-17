export default function Title ({ title, classname }) { // (props)
  return (
    <h1 className={classname}>{ title }</h1>
  )
}

export const getTitle = () => {
  return 'Hola;';
}