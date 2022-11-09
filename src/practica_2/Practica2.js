import Header from "./components/Header";
import Main from "./components/Main";
import Page from "./components/Page";

export default function Practica2() {
  const site = {
    pageTitle: "Unidad 1.2 - Práctica",
    pageBody: "Implementación de árbol de componentes y propiedades en React.",
  };

  const links = ["https://frro.cvg.utn.edu.ar/", "https://github.com/"];

  return (
    <div>
      <Page>
        <Header pageTitle={site.pageTitle} />
        <Main pageBody={site.pageBody} links={links} />
      </Page>
    </div>
  );
}
