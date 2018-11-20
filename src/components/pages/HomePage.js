import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Divider, Message, Card, Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { searchGifs, clearSearch } from '../../actions/search';
import { addToFavorites, removeFromFavorites } from '../../actions/favorite';
import SearchGifsForm from '../forms/SearchGifsForm';
import SearchGifCard from '../templates/SearchGifCard';
import PaginationAddon from '../addons/PaginationAddon';
import './HomePage.css';

let searchQuery = ''
export const HomePage = (props) => {
    const submit = query => {
        searchQuery = query
        return props.searchGifs(query);
    }
    const handlePageChange = (e, { activePage }) => {
        e.preventDefault();
        const offset = (activePage - 1) * 24
        props.searchGifs(searchQuery, offset)
    }
    const clearSearchResults = () => props.clearSearch();
    const toggleFavorite = (data) => {
        if (!data.isFave) {
            props.addToFavorites({ ...data, isFave: true })
        } else {
            props.removeFromFavorites(data.id)
        }
    };
    const results = props.searchResult;
    const errors = props.searchError;
    const paginationPages = Math.floor(props.pagination / 24);
    return (
        < Grid centered stackable columns={2} >
            <Grid.Row />
            <Grid.Column>
                <SearchGifsForm submit={submit} />
            </Grid.Column>
            {
                results && results.length > 1 && <Grid.Row centered columns={1}>
                    <Divider />
                    <Grid.Column >
                        <Button id="clearSearch" size='small' floated='right' onClick={clearSearchResults}>
                            <Icon name='times' />
                            Clear Search
                        </Button>
                    </Grid.Column>
                </Grid.Row>
            }
            <Grid.Row centered>
                <Card.Group stackable itemsPerRow={4}>
                    {results.length > 0 && results.map(gif =>
                        <SearchGifCard
                            key={gif.id}
                            id={gif.id}
                            toggleFavorite={toggleFavorite}
                            title={gif.title}
                            imgUrl={gif.imgUrl}
                            isFave={gif.isFave}
                        />,
                    )}
                </Card.Group>
                {!results[0] && errors.isNoResults && <Message size='big'>No search results found!</Message>}
                {errors.isNoConnection && < Message size='big' negative>Server is not responding, try again later!</Message>}
            </Grid.Row>
            <Grid.Row>
                {paginationPages > 1 &&
                    <PaginationAddon
                        key={searchQuery}
                        pages={paginationPages}
                        handlePageChange={handlePageChange}
                    />
                }
            </Grid.Row>
        </Grid >
    );
}

HomePage.propTypes = {
    searchGifs: PropTypes.func.isRequired,
    searchResult: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        imgUrl: PropTypes.string.isRequired,
        isFave: PropTypes.bool.isRequired,
    }).isRequired).isRequired,
    searchError: PropTypes.objectOf(PropTypes.shape({
        isNoResults: PropTypes.bool.isRequired,
        isNoConnection: PropTypes.bool.isRequired,
    }).isRequired).isRequired,
    clearSearch: PropTypes.func.isRequired,
    addToFavorites: PropTypes.func.isRequired,
    removeFromFavorites: PropTypes.func.isRequired,
    pagination: PropTypes.number.isRequired,
};

function mapStateToProps(state) {
    return {
        searchResult: state.search.searchResult,
        searchError: state.search.searchError,
        pagination: state.search.pagination,
    };
};

export default connect(mapStateToProps, { searchGifs, clearSearch, addToFavorites, removeFromFavorites })(HomePage);
