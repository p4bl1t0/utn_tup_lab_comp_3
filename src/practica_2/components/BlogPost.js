import Title from "./Title";
import Body from "./Body";

const news = {
    title: "Así están hoy los quintillizos Riganti: 30 años a pura hermandad e independencia",
    body: "Se llaman Franco, Sofía, Camila, Martina y Catalina y ese fue su orden de llegada, con dos minutos de diferencia entre sí, el 6 de febrero de 1992. Son más conocidos como los quintillizos Riganti y fueron los primeros quintillizos nacidos por fertilización asistida en Argentina."
}


const BlogPost = () => {
  return (
    <div>
        <Title title={news.title}/>
        <Body body={news.body}/>
    </div>
  )
}

export default BlogPost