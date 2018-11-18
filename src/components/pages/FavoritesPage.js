import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import GifCardFavorite from '../templates/GifCardFavorite';

class FavoritesPage extends Component {
    state = {}

    componentWillMount() {
        const favorites = JSON.parse(localStorage.getItem("favorites"));
        this.setState({ favorites })
    }

    render() {
        const { favorites } = this.state;
        return (
            <Card.Group stackable itemsPerRow={4}>
                {favorites && favorites.map(gif =>
                    <GifCardFavorite
                        key={gif.id}
                        title={gif.title}
                        imgUrl={gif.imgUrl} />
                )}
            </Card.Group>
        );
    }
}

FavoritesPage.propTypes = {

}



export default FavoritesPage;