import Main from "./components/Main";
import Page from "./components/Page";
import Header from "./components/Header";

const site = {
  pageTitle: "Unidad 1.2 - Práctica",
  pageBody: "Implementación de árbol de componentes y propiedades en React.",
  links: [
    "https://ethereum.org/es/developers/docs/intro-to-ethereum/",
    "https://es.investing.com/crypto/",
  ],
};

export default function Practica2() {
  return (
    <div>
      <Page>
        <Header pageTitle={site.pageTitle} />
        <Main pageBody={site.pageBody} links={site.links} />
      </Page>
    </div>
  );
}
