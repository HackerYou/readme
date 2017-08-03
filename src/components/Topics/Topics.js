import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TopicsList from '../TopicsList/TopicsList';
import Input from '../Forms/Input/Input';

class Topics extends React.Component {
    constructor() {
        super();
        this.state = {
            topic: '',
        };
    }
    componentDidMount() {
        const { getTopicsThunk } = this.props.actions;
        getTopicsThunk();
    }
    handleInput(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    render() {
        return (
            <div className="topics">
                <div className="container">
                    <header className="topContent">
                        <Link className="linkBtn" to="dashboard">
                            <button className="primary">
                                <i className="chalk-home" />back to dashboard
                            </button>
                        </Link>
                        <Link className="linkBtn" to="course-templates">
                            <button className="primary">Course Templates</button>
                        </Link>
                    </header>
                    <h1>Topics</h1>
                    <div>
                        <section className="full detailsForm topicsForm card">
                            <form onSubmit={this.createTopic}>
                                <div className="fieldRow">
                                    <Input
                                        labelText="Create new topic"
                                        name="topic"
                                        type="text"
                                        value={this.state.topic}
                                        placeholder="Topic Name"
                                        handleChange={this.handleInput}
                                        labelInline
                                        largeLabel
                                    />
                                    <button className="success">Create Topic</button>
                                </div>
                            </form>
                        </section>
                        <TopicsList
                            setVisibilityFilter={this.props.actions.setVisibilityFilter}
                            topics={this.props.topics}
                            searchTopics={this.props.actions.searchTopics}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

Topics.propTypes = {
    topics: PropTypes.shape({
        topics: PropTypes.arrayOf(PropTypes.object).isRequired,
        visibilityFilter: PropTypes.string.isRequired,
    }).isRequired,
    actions: PropTypes.shape({
        getTopicsThunk: PropTypes.func.isRequired,
        setVisibilityFilter: PropTypes.func.isRequired,
        searchTopics: PropTypes.func.isRequired,
    }).isRequired,
};

export default Topics;
