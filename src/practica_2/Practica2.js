import Header from "./Components/Header";
import Main from "./Components/Main";
import Page from "./Components/Page";

const site = {
  pageTitle: "Unidad 1.2 - Práctica",
  pageBody: "Implementación de árbol de componentes y propiedades en React.",
};

export default function Practica2() {
  return (
    <div className="App">
      <Page>
        <Header title={site.pageTitle} />
        <Main body={site.pageBody} />
      </Page>
    </div>
  );
}
