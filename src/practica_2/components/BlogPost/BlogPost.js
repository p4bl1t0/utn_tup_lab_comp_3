import Title from '../Title/Title'
import Body from '../Body/Body'

const news = {
    title: "La humanización de la tecnología",
    body: "Las empresas tecnológicas juegan un papel clave en crear las herramientas, plataformas y servicios de esas sociedades futuristas, que serán la base de las mismas, muchas de las cuales hasta ahora solo hemos imaginado en los libros o películas de ciencia ficción."
}

const BlogPost = () => {
  return (
    <div>
        < Title title = {news.title} />
        < Body body = {news.body} />
    </div>
  )
}

export default BlogPost