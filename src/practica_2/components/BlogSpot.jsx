import Title from "./Title";
import Main from "./Main";

function BlogPost() {
  const randomTitle = "Notas Laboratorio de computacion III";
  const randomBody = "Contenido";

  return (
    <div className="blog-post">
      <Title title={randomTitle} />
      <Main body={randomBody} />
    </div>
  );
}
