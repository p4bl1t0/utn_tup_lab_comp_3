import Header from "./components/Header";
import Main from "./components/Main";
import Page from "./components/Page";


const site = {
  pageTitle: "Unidad 1.2 - Práctica",
  pageBody: "Implementación de árbol de componentes y propiedades en React.",
  links: ["https://www.twitch.tv", "https://facebook.com"],
};

export default function Practica2() {
  return (
    <div>
      <Page>
        <Header pageTitle = {site.pageTitle} />
        <Main pageBody = {site.pageBody} links = {site.links}/>
      </Page>
      
    </div>
  );
}