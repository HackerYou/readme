import React from 'react';
import PropTypes from 'prop-types';

import Input from '../Forms/Input/Input';
import Select from '../Forms/Select/Select';
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
            filter: filters.SHOW_ALL,
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
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
                                value={this.state.filter}
                                labelInline
                            />
                        </form>
                    </div>
                </section>
                <section className="topicsWrap">
                    {this.props.topics.map(topic => <Topic key={topic._id} topic={topic} />)}
                </section>
            </div>
        );
    }
}

TopicsList.propTypes = {
    topics: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default TopicsList;
