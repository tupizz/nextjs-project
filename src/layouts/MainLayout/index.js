import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/Header';

import { Container } from './styles';

export default function MainLayout({ children }) {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
}

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
