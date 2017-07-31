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
        this.handleChange = this.handleChange.bind(this);
        this.onChangePage = this.onChangePage.bind(this);
    }
    onChangePage(pageOfItems) {
        this.setState({ pageOfItems });
    }
    handleChange(e) {
        this.props.setVisibilityFilter(e.target.value);
    }
    render() {
        return (
            <div>
                <section className="full card topicsForm searchTopics">
                    <div className="inlineFieldRow">
                        <form>
                            <Input
                                labelText="Search by name"
                                name="name"
                                type="text"
                                value={this.state.name}
                                placeholder="Topic Name"
                                handleChange={this.handleChange}
                                labelInline
                            />
                            <Select
                                options={Object.keys(filters).map(filter => filters[filter])}
                                name="filter"
                                labelText="Filter by category"
                                handleChange={this.handleChange}
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
};

export default TopicsList;
