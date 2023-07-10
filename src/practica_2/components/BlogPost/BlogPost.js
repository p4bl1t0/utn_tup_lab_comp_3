import Title from '../Title/Title'
import Body from '../Body/Body'

const news = {
    title: "Los jueguitos de computadora",
    body: "Los jueguitos de computadora me salvaron la vida... Nada eso, quiero agradecerles por existir."
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