import PropTypes from 'prop-types';
import React from 'react';

import './Card.scss';

const Card = ({
  image,
  name,
  description,
  customClass,
  small,
}) => (
  <div className={`pedigree-card ${customClass} ${small ? 'pedigree-card--small' : ''}`}>
    { image && <img alt="" src={image} className="pedigree-card__image" /> }
    <div className="pedigree-card__content">
      <h4 className="pedigree-card__content-title">{name}</h4>
      <p className="pedigree-card__content-description">{description}</p>
    </div>
  </div>
);

Card.defaultProps = {
  image: '',
  name: '',
  description: '',
  customClass: '',
  small: false,
};

Card.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  customClass: PropTypes.string,
  small: PropTypes.bool,
};

export default Card;
