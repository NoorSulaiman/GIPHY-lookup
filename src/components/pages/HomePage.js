import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import SearchGifsForm from '../forms/SearchGifsForm';

class HomePage extends Component {
    state = {}
    render() {
        return (
            <Grid centered stackable columns={2}>
                <Grid.Column>
                    <SearchGifsForm />
                </Grid.Column>
            </Grid>
        );
    }
}

export default HomePage;