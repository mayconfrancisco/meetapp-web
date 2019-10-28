import React from 'react';
import { Link } from 'react-router-dom';
import { MdSearch } from 'react-icons/md';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function EmptyScreen({ onAction, onActionText }) {
  return (
    <Container>
      <MdSearch size={40} />
      Não encontramos dados
      {onAction && <Link to={onAction}>{onActionText}</Link>}
    </Container>
  );
}

EmptyScreen.propTypes = {
  onAction: PropTypes.string,
  onActionText: PropTypes.string,
};

EmptyScreen.defaultProps = {
  onAction: null,
  onActionText: null,
};
