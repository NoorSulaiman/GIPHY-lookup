import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react';
import InlineError from '../messages/InlineError';

class SearchGifsForm extends React.Component {
    state = {
        data: {},
        loading: false,
        errors: {}
    };

    onChange = e =>
        this.setState({
            ...this.state,
            data: { ...this.state.data, [e.target.name]: e.target.value }
        });

    onSubmit = e => {
        e.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
            this.setState({ loading: true });
            this.props
                .submit(this.state.data)
                .catch(err =>
                    this.setState({ errors: err.response.data.errors, loading: false })
                );
        }
    };

    validate = data => {
        const errors = {};
        if (data.search.length === 0 || !data.search.trim()) errors.index = "Can't be blank"
        return errors;
    };

    render() {
        const { data, errors, loading } = this.state;
        return (
            <Form onSubmit={this.onSubmit} loading={loading} size="big">
                <Form.Group inline>
                    <Form.Field error={!!errors.search}>
                        <input
                            type="text"
                            id="search"
                            name="search"
                            placeholder="Search for GIFs"
                            value={data.search}
                            onChange={this.onChange}
                        />
                        {errors.search && <InlineError text={errors.search} />}
                    </Form.Field>
                    <Button size="big">Search</Button>
                </Form.Group>
            </Form>
        );
    }
};
SearchGifsForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default SearchGifsForm;