import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

import Page from "./components/Page";

const site = {
  pageTitle: "Unidad 1.2 - Práctica",
  pageBody: "Implementación de árbol de componentes y propiedades en React.",
};

const { pageTitle, pageBody } = site;

const pages = [
  { title: "Youtube", link: "https://www.youtube.com/" },
  { title: "Facebook", link: "https://www.facebook.com/" },
];

export default function Practica2() {
  return (
    <Page>
      <Header title={pageTitle} />
      <Main body={pageBody} pages={pages} />
    </Page>
  );
}
