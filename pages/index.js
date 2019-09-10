import React from 'react';
import PropTypes from 'prop-types';
import MainLayout from '../src/layouts/MainLayout';

export default function Home({ user }) {
  return (
    <MainLayout>
      <h1>Hello World {user.name}</h1>
    </MainLayout>
  );
}

Home.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
  }).isRequired,
};

// Feito pelo nextjs do lado do servidor
Home.getInitialProps = async () => {
  return {
    user: {
      name: 'Tadeu',
      lastname: 'Tupinambá',
    },
  };
};
