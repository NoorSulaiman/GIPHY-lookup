import React from 'react';
import PropTypes from 'prop-types';
import { Card, Icon } from 'semantic-ui-react';
import './FavoritesGifCard.css';

const FavoritesGifCard = ({ title, imgUrl, id, removeFunc }) => (
    <Card id='favgifcard'>
        <img alt="gifImage" src={imgUrl} />
        {/* todo: switch to button */}
        <Icon as='a' id='deleteIcon' onClick={() => removeFunc(id)}>
            <Icon size='large' name='close' id='delIcon' />
            <span id="tooltipdelete">Delete!</span>
        </Icon>

        <Card.Content>
            <Card.Header>{title}</Card.Header>
        </Card.Content>
    </Card>
);


FavoritesGifCard.propTypes = {
    title: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    removeFunc: PropTypes.func.isRequired
}

export default FavoritesGifCard;