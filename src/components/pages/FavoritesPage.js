import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';
import { removeFromFavorites } from '../../actions/favorite';
import FavoritesGifCard from '../templates/FavoritesGifCard';

class FavoritesPage extends Component {
    state = {}

    componentWillMount() {
        const favorites = JSON.parse(localStorage.getItem("favorites"));
        this.setState({ favorites })
    }

    removeGif = (id) => {
        this.props.removeFromFavorites(id)
        this.componentWillMount()
    }

    render() {
        const { favorites } = this.state;
        return (
            <Card.Group stackable itemsPerRow={4}>
                {favorites && favorites.map(gif =>
                    <FavoritesGifCard
                        key={gif.id}
                        id={gif.id}
                        remove={this.removeGif}
                        title={gif.title}
                        imgUrl={gif.imgUrl} />
                )}
            </Card.Group>
        );
    }
}

FavoritesPage.propTypes = {
    removeFromFavorites: PropTypes.func.isRequired
}



export default connect(null, { removeFromFavorites })(FavoritesPage);;