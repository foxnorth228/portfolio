import React from 'react';
import './app.scss';
import Header from '@layouts/header/header';
import Footer from '@layouts/footer/footer';
import Main from '@layouts/main/main';

export const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
};
