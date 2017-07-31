import React from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import keygen from 'keygenerator';

const getPager = (totalItems, curPage, pgSize) => {
    let currentPage = curPage;
    let pageSize = pgSize;
    currentPage = currentPage || 1;
    pageSize = pageSize || 10;

    const totalPages = Math.ceil(totalItems / pageSize);
    let startPage;
    let endPage;
    if (totalPages <= 10) {
        startPage = 1;
        endPage = totalPages;
    } else if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
    } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
    } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
    }
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min((startIndex + pageSize) - 1, totalItems - 1);
    const pages = _.range(startPage, endPage + 1);

    return {
        totalItems,
        currentPage,
        pageSize,
        totalPages,
        startPage,
        endPage,
        startIndex,
        endIndex,
        pages,
    };
};

class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pager: {},
        };
    }

    componentDidMount() {
        if (this.props.items && this.props.items.length) {
            this.setPage(this.props.initialPage);
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.items !== prevProps.items) {
            this.setPage(this.props.initialPage);
        }
    }

    setPage(page) {
        const items = this.props.items;
        let pager = this.state.pager;

        if (page < 1 || page > pager.totalPages) {
            return;
        }

        pager = getPager(items.length, page);
        const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);
        this.setState({ pager });
        this.props.onChangePage(pageOfItems);
    }
    render() {
        const pager = this.state.pager;
        if (!pager.pages || pager.pages.length <= 1) {
            return null;
        }

        return (
            <ul className="pagination">
                <li className={pager.currentPage === 1 ? 'disabled' : ''}>
                    <a onClick={() => this.setPage(1)}>First</a>
                </li>
                <li className={pager.currentPage === 1 ? 'disabled' : ''}>
                    <a onClick={() => this.setPage(pager.currentPage - 1)}>Previous</a>
                </li>
                {pager.pages.map((page) => {
                    return (<li key={keygen._()} className={pager.currentPage === page ? 'active' : ''}>
                        <a onClick={() => this.setPage(page)}>{page}</a>
                    </li>);
                })}
                <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
                    <a onClick={() => this.setPage(pager.currentPage + 1)}>Next</a>
                </li>
                <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
                    <a onClick={() => this.setPage(pager.totalPages)}>Last</a>
                </li>
            </ul>
        );
    }

}

Pagination.defaultProps = {
    initialPage: 1,
};

Pagination.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    onChangePage: PropTypes.func.isRequired,
    initialPage: PropTypes.number,
};

export default Pagination;
