import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Page from "./components/Page/Page";

const site = {
  pageTitle: "Unidad 1.2 - Práctica",
  pageBody: "Implementación de árbol de componentes y propiedades en React.",
};

const links = [
  {
    id: "1",
    page: "instagram",
    link: "https://www.instagram.com/",
  },
  {
    id: "2",
    page: "Youtube",
    link: "https://www.youtube.com/",
  },
  { id: "3", page: "twitter", link: "https://twitter.com/" },
];

export default function Practica2() {
  return (
    <Page>
      <Header title={site.pageTitle} />
      <Main pageBody={site.pageBody} links={links} />
    </Page>
  );
}
