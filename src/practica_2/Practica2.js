import Header from "./components/Header";
import Main from "./components/Main";
import Page from "./components/Page";
const site = {
  pageTitle: "Unidad 1.2 - Práctica",
  pageBody: "Implementación de árbol de componentes y propiedades en React.",
};
const links = [
  {
    id: 1,
    url: "https://github.com/NekiroPLZ",
  },
  {
    id: 2,
    url: "https://www.linkedin.com/in/matias-rubiolo-malamud-667974172/",
  },
];

export default function Practica2() {
  return (
    <div>
      <Page>
        <Header items={site} />
        <Main items={site} pages={links} />
      </Page>
    </div>
  );
}
