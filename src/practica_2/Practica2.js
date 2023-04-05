import Header from "./components/Header";
import Main from "./components/Main";
const site = {
  pageTitle: "Unidad 1.2 - Práctica",
  pageBody: "Implementación de árbol de componentes y propiedades en React.",
};
const links = [
  {
    url1: "https://github.com/NekiroPLZ",
    url2: "https://www.linkedin.com/in/matias-rubiolo-malamud-667974172/",
  },
];

export default function Practica2() {
  return (
    <div>
      <Header items={site} />
      <Main items={site} sites={links} />
    </div>
  );
}
