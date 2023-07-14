import Title from "./Title";
import Body from "./Body";

const BlogPost = ({ title, body }) => {
  const newsTitle = "Prompt engineer, la nueva profesión basada en A.I.  ";

  const newsBody = `Anthropic, una empresa que cuenta con algunos miembros fundadores de OpenAI, está ofreciendo salarios de hasta US$ 335,000 💸 a personas que puedan conversar con un chatbot

    Quienes sean seleccionados 🍀, tendrán la tarea de conversar con modelos de inteligencia similares a chatGPT durante varias horas al día. Una labor que busca mejorar en gran medida la capacidad de respuesta de este tipo de inteligencias y a su vez superar los bugs que hasta el momento se han encontrado.
    
    Las personas que se candidatizen para esta noble labor, deberán demostrar habilidades lingüísticas excepcionales 🤓 y tener una amplia gama de conocimientos. Además, deben ser capaces de mantener conversaciones interesantes y útiles para entrenar hábilmente las capacidades de estos bots.
    
    Los y las afortunadas que resulten seleccionados para este trabajo, tendrán la oportunidad de realizar sus actividades de manera remota 🎉 y tendrán también un horario flexible. La empresa busca personas con diversas experiencias y antecedentes, ya que esto ayudará a mejorar la capacidad de la A.I. para entender y responder a diferentes perspectivas culturales y lingüísticas.
    
    Es importante destacar que el objetivo de esta iniciativa es mejorar la capacidad de entendimiento y respuesta a preguntas complejas y contextuales. Contando también que esta oportunidad puede ser una experiencia enriquecedora para las personas seleccionadas, pues les permitirá interactuar con una inteligencia artificial avanzada, mejorar su habilidad en el uso del lenguaje y sentar un gran precedente histórico… en un futuro podrán decir: “yo ayudé a programar un chatBot” 🤖
    
    Sin lugar a dudas, este tipo de herramientas de A.I. abren la puerta hacia profesiones nuevas que irán variando conforme los avances de la inteligencia artificial. Si te interesa saber un poco más de esta oferta, te dejo el enlace aquí.`;

  return (
    <>
      <Title title={newsTitle} />
      <Body body={newsBody} />
    </>
  );
};

export default BlogPost;
