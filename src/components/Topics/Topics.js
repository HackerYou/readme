import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TopicsList from '../TopicsList/TopicsList';
import Input from '../Forms/Input/Input';
import { run, ruleRunner } from '../../utils/forms/ruleRunner';
import { required } from '../../utils/forms/rules';

const fieldValidations = [
    ruleRunner('title', 'Topic title', required),
];

class Topics extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            validationErrors: {},
        };
        this.handleInput = this.handleInput.bind(this);
        this.createTopic = this.createTopic.bind(this);
    }
    componentDidMount() {
        const { getTopicsThunk } = this.props.actions;
        getTopicsThunk();
        this.setState({ validationErrors: run(this.state, fieldValidations) });
    }
    handleInput(e) {
        const newState = Object.assign({}, this.state, {
            [e.target.name]: e.target.value,
        });
        newState.validationErrors = run(newState, fieldValidations);
        this.setState(newState);
    }
    createTopic(e) {
        e.preventDefault();
        const { broadcast } = this.props.actions;
        const { validationErrors, title } = this.state;
        const prefix = 'Please resolve the following errors: ';

        if (Object.keys(validationErrors).length > 0) {
            let errors = Object.keys(validationErrors).map(error => validationErrors[error]);
            errors = errors.join(', ');
            broadcast(prefix + errors, 'error');
            return null;
        }
        return this.props.actions.createTopicThunk({
            title,
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
                                        name="title"
                                        type="text"
                                        value={this.state.title}
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
        broadcast: PropTypes.func.isRequired,
        getTopicsThunk: PropTypes.func.isRequired,
        setVisibilityFilter: PropTypes.func.isRequired,
        searchTopics: PropTypes.func.isRequired,
        createTopicThunk: PropTypes.func.isRequired,
    }).isRequired,
};

export default Topics;
