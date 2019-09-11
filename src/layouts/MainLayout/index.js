import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/Header';

import { Container } from './styles';

import GlobalStyle from '../../styles/global';

export default function MainLayout({ children }) {
  return (
    <Container>
      <Header />
      <GlobalStyle />
      {children}
    </Container>
  );
}

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
