import Title from "./Title";
import Body from "./Body";

const nota = {
  title: "El impacto de los incendios en la fauna de los humedales del Paraná",
  body: "Desde el refugio Mundo Aparte brindaron algunas precisiones sobre cómo se ven afectados los animales por los incendios.",
};

const BlogPost = () => {
  return (
    <div className="blogpost-style">
      <Title title={nota.title} />
      <Body body={nota.body} />
    </div>
  );
};

export default BlogPost;
