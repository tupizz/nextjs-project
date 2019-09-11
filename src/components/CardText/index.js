import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MdArrowDownward, MdArrowUpward } from 'react-icons/md';

import { Container, Title, Content, Button } from './styles';

export default function CardText({ title, content }) {
  const [clickDetails, setClickDetails] = useState(false);

  function handleClickDetails() {
    setClickDetails(!clickDetails);
  }

  return (
    <Container>
      <Title>{title}</Title>
      <Content isClicked={clickDetails}>{content}</Content>
      <Button type="button" onClick={handleClickDetails}>
        {clickDetails ? (
          <>
            <span>Esconder</span>
            <MdArrowUpward size={11} />
          </>
        ) : (
          <>
            <span>Leia mais</span>
            <MdArrowDownward size={11} />
          </>
        )}
      </Button>
    </Container>
  );
}

CardText.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
