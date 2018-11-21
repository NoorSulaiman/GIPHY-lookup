import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'semantic-ui-react';

const PaginationAddon = (props) =>(
<Pagination
        defaultActivePage={1}
        totalPages={props.pages}
        siblingRange={3}
        boundaryRange={3}
        onPageChange={props.handlePageChange}
    />
);

PaginationAddon.propTypes = {
    pages: PropTypes.number.isRequired,
    handlePageChange: PropTypes.func.isRequired,
}
    
export default PaginationAddon;