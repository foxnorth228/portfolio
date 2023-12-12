import React from 'react';
import './style.scss';
import Header from '@layouts/Header';
import Footer from '@layouts/Footer';
import Main from '@layouts/Main';

export const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
};
