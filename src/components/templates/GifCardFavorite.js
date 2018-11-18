import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

const GifCardFavorite = ({ title, imgUrl }) => (
    <Card id='GifCardFavorite'>
        <img alt="cardImages" src={imgUrl} />
        <Card.Content>
            <Card.Header>{title}</Card.Header>
        </Card.Content>
    </Card>
);


GifCardFavorite.propTypes = {
    title: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired
}

export default GifCardFavorite;