import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/Header';

import { Container, ChildrenContainer } from './styles';

import GlobalStyle from '../../styles/global';

export default function MainLayout({ children }) {
  return (
    <Container>
      <Header />
      <GlobalStyle />

      <ChildrenContainer>{children}</ChildrenContainer>
    </Container>
  );
}

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
