import React from 'react';
import PropTypes from 'prop-types';

import Input from '../Forms/Input/Input';
import Select from '../Forms/Select/Select';
import Pagination from '../Pagination/Pagination';
import Topic from '../Topic/Topic';

const filters = {
    SHOW_ALL: 'Show All',
    HTML: 'HTML',
    CSS: 'CSS',
    JAVASCRIPT: 'Javascript',
    WORDPRESS: 'Wordpress',
    TOOLS: 'Tools',
    PROJECT: 'Project',
    RESOURCE: 'Resource',
    UX: 'UX',
    SEO: 'SEO',
};

class TopicsList extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            pageOfItems: [],
        };
        this.handleInput = this.handleInput.bind(this);
        this.onChangePage = this.onChangePage.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    onChangePage(pageOfItems) {
        this.setState({ pageOfItems });
    }
    handleInput(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    handleSelect(e) {
        this.props.setVisibilityFilter(e.target.value);
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.searchTopics(this.state.name);
    }
    render() {
        return (
            <div>
                <section className="full card topicsForm searchTopics">
                    <div className="inlineFieldRow">
                        <form onSubmit={this.handleSubmit}>
                            <Input
                                labelText="Search by name"
                                name="name"
                                type="text"
                                value={this.state.name}
                                placeholder="Topic Name"
                                handleChange={this.handleInput}
                                labelInline
                            />
                            <Select
                                options={Object.keys(filters).map(filter => filters[filter])}
                                name="filter"
                                labelText="Filter by category"
                                handleChange={this.handleSelect}
                                value={this.props.topics.visibilityFilter}
                                labelInline
                            />
                        </form>
                    </div>
                </section>
                <Pagination items={this.props.topics.topics} onChangePage={this.onChangePage} />
                <section className="topicsWrap">
                    {this.state.pageOfItems.map(topic => <Topic key={topic._id} topic={topic} />)}
                </section>
            </div>
        );
    }
}

TopicsList.propTypes = {
    topics: PropTypes.shape({
        topics: PropTypes.arrayOf(PropTypes.object).isRequired,
        visibilityFilter: PropTypes.string.isRequired,
    }).isRequired,
    setVisibilityFilter: PropTypes.func.isRequired,
    searchTopics: PropTypes.func.isRequired,
};

export default TopicsList;
