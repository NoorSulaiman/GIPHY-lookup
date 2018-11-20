import React from 'react';
import PropTypes from 'prop-types';
import { Card, Icon } from 'semantic-ui-react';
import './SearchGifCard.css';

const GifCard = ({ title, imgUrl, toggleFavorite, id, isFave }) => (
    <Card id='gifcard' onClick={() => toggleFavorite({ title, imgUrl, id, isFave })}>
        <img alt={`${title}`} src={imgUrl} />
        {
            isFave ?
                <Icon size='large' id='favIcon' name='favorite' className='favActive' />
                : <Icon size='large' id='favIcon' name='favorite' />
        }
        <Card.Content>
            <Card.Header>{title}</Card.Header>
        </Card.Content>
    </Card >
);



GifCard.propTypes = {
    title: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    toggleFavorite: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    isFave: PropTypes.bool.isRequired,
};

export default GifCard;