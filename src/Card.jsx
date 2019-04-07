import React from 'react';

import './Card.scss';

const Card = ({ image, name, description, customClass, small }) => (
    <div className={`pedigree-card ${customClass} ${ small ? 'pedigree-card--small' : '' }`}>
        { image && <img src={image} className="pedigree-card__image" /> }
        <div className="pedigree-card__content">
            <h4 className="pedigree-card__content-title">{name}</h4>
            <p className="pedigree-card__content-description">{description}</p>
        </div>
    </div>
);

export default Card;