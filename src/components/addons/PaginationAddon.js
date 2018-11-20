import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'semantic-ui-react';

const PaginationAddon = (props) =>
    <Pagination
        defaultActivePage={props.activePage}
        totalPages={props.pages}
        siblingRange={3}
        boundaryRange={3}
        onPageChange={props.handlePageChange}
    />

export default PaginationAddon;