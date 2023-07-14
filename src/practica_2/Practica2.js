
import React from 'react';
import Page from './components/Page';
import Header from './components/Header';
import Main from './components/Main';
import BlogPost from './components/BlogPost';

const site = {
  pageTitle: 'Unidad 1.2 - Práctica',
  pageBody: 'Implementación de árbol de componentes y propiedades en React.',
};

const links = [
  { label: 'Sitio 1', url: 'https://www.sitio1.com' },
  { label: 'Sitio 2', url: 'https://www.sitio2.com' },
];

const Practica2 = () => {
  return (
    <div>
      <Page>
        <Header pageTitle={site.pageTitle} />
        <Main pageBody={site.pageBody} links={links} />
        <BlogPost
          title="Mundial Femenino"
          body="Un equipo profesionalizado y con más jugadoras en el exterior"
        />
      </Page>
    </div>
  );
};

export default Practica2;
