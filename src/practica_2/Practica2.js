import Page from "./components/Page/Page"
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const site = {
  pageTitle: "Unidad 1.2 - Práctica",
  pageBody: "Implementación de árbol de componentes y propiedades en React.",
  links: ["https://github.com/", "https://stackoverflow.com/"],
};

export default function Practica2() {
  return (
    <div>
      <Page>
        <Header title={site.pageTitle} />
        <Main body={site.pageBody} links={site.links} />
      </Page>
    </div>
  );
}
