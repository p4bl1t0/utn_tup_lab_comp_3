import Page from "./components/Page/Page.js";
import Header from "./components/Header/Header.js";
import Main from "./components/Main/Main.js";

const site = {
  pageTitle: "Unidad 1.2 - Práctica",
  pageBody: "Implementación de árbol de componentes y propiedades en React.",
  links: ["https://www.twitch.tv", "https://facebook.com"],
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