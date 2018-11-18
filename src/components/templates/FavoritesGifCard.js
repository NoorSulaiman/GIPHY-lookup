import React from 'react';
import PropTypes from 'prop-types';
import { Card, Icon } from 'semantic-ui-react';
import './FavoritesGifCard.css';

const FavoritesGifCard = ({ title, imgUrl, id, remove }) => (
    <Card id='favgifcard'>
        <img alt="cardImages" src={imgUrl} />
        {<Icon as='div' link id='deleteIcon' onClick={() => remove(id)}>
            <Icon size='large' name='close' id='delIcon' />
            <span id="tooltipdelete">Delete!</span>
        </Icon>}
        {<Icon as='a' link id='downloadIcon' href={imgUrl}>
            <Icon size='large' name='arrow down' id='downIcon' />
            <span id="tooltipdownload">Download!</span>
        </Icon>}
        <Card.Content>
            <Card.Header>{title}</Card.Header>
        </Card.Content>
    </Card>
);


FavoritesGifCard.propTypes = {
    title: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired
}

export default FavoritesGifCard;