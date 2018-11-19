import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';
import { removeFromFavorites } from '../../actions/favorite';
import FavoritesGifCard from '../templates/FavoritesGifCard';

const FavoritesPage = ({ favorites, removeFunc }) => (
    <Card.Group stackable itemsPerRow={4}>
        {favorites && Object.keys(favorites).map(id =>
            <FavoritesGifCard
                key={id}
                id={id}
                removeFunc={removeFunc}
                title={favorites[id].title}
                imgUrl={favorites[id].imgUrl} />
        )}
    </Card.Group>
);

FavoritesPage.propTypes = {
    favorites: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        imgUrl: PropTypes.string.isRequired,
    }).isRequired).isRequired,
    removeFunc: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    return {
        favorites: state.favorites,
    };
}

export default connect(mapStateToProps, { removeFunc: removeFromFavorites })(FavoritesPage);