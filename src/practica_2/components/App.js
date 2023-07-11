import React from 'react';
import Header from './Header';
import Main from './Main';
import Page from './Page';
import './App.css';

const App = () => {
  const site = 'Mi sitio web';
  const links = ['Inicio', 'Acerca de'];
  const pageBody = 'Bienvenido/a a mi pagina';

  return (
    <div className="menu">
      <Page>
        <Header pageTitle={site} />
        <Main pageBody={pageBody} links={links} />
      </Page>
    </div>
  );
}

export default App;