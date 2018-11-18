import React from 'react';
import PropTypes from 'prop-types';
import { Card, Icon } from 'semantic-ui-react';
import './GifCard.css'

const GifCard = ({ title, imgUrl, addToFavorites, id }) => {
    const favorites = localStorage.getItem("favorites") ? JSON.parse(localStorage.getItem("favorites")) : [];
    const idFound = favorites.find(gif => gif.id === id)
    return < Card id='gifcard' onClick={() => addToFavorites({ title, imgUrl, id, idFound })}>
        <img alt="cardImages" src={imgUrl} />
        {
            idFound ?
                <Icon size='large' id='favIcon' name='favorite' className='favActive' />
                : <Icon size='large' id='favIcon' name='favorite' />
        }
        <Card.Content>
            <Card.Header>{title}</Card.Header>
        </Card.Content>
    </Card >

}


GifCard.propTypes = {
    title: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    addToFavorites: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
}

export default GifCard;