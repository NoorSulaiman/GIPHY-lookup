import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Divider, Message, Card, Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { searchGifs, clearSearch } from '../../actions/search';
import { addToFavorites, removeFromFavorites } from '../../actions/favorite';
import SearchGifsForm from '../forms/SearchGifsForm';
import SearchGifCard from '../templates/SearchGifCard';
import './HomePage.css'

class HomePage extends Component {
    state = {
        results: this.props.searchResult,
        errors: this.props.searchError,
    }
    componentWillReceiveProps(props) {
        this.setState({
            results: props.searchResult,
            errors: props.searchError
        })
    }
    submit = query => this.props.searchGifs(query).then()
    clearSearch = () => this.props.clearSearch()
    addToFavorites = (data) => {
        if (!data.idFound) {
            this.props.addToFavorites(data)
            this.setState({ num: this.state.num + 1 })
        } else {
            this.props.removeFromFavorites(data.idFound.id)
            this.setState({ num: this.state.num + 1 })
        }
    }


    render() {
        const { results, errors } = this.state;
        return (
            <Grid centered stackable columns={2}>
                <Grid.Row />
                <Grid.Column>
                    <SearchGifsForm submit={this.submit} />
                </Grid.Column>
                {results && <Grid.Row centered columns={1}>
                    <Divider />
                    <Grid.Column >
                        <Button size='small' floated='right' onClick={this.clearSearch}>
                            <Icon name='times' />
                            Clear Search
                        </Button>
                    </Grid.Column>
                </Grid.Row>}
                <Grid.Row centered>
                    <Card.Group stackable itemsPerRow={4}>
                        {results && results.map(gif =>
                            <SearchGifCard
                                key={gif.id}
                                id={gif.id}
                                addToFavorites={this.addToFavorites}
                                title={gif.title}
                                imgUrl={gif.images.fixed_height.url}
                            />
                        )}
                    </Card.Group>
                    {results && results.length < 1 && <Message>No search result found!</Message>}
                    {errors && <Message negative>{errors}</Message>}
                </Grid.Row>
            </Grid>
        );
    }
}

HomePage.propTypes = {
    searchGifs: PropTypes.func.isRequired,
    searchResult: PropTypes.arrayOf(PropTypes.shape({
        slug: PropTypes.string.isRequired
    })).isRequired,
    searchError: PropTypes.string.isRequired,
    clearSearch: PropTypes.func.isRequired,
    addToFavorites: PropTypes.func.isRequired,
    removeFromFavorites: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        searchResult: state.gifSearchReducer.searchResult,
        searchError: state.gifSearchReducer.searchError
    }
}

export default connect(mapStateToProps, { searchGifs, clearSearch, addToFavorites, removeFromFavorites })(HomePage);;