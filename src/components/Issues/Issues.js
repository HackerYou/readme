import React from 'react';
import PropTypes from 'prop-types';
import Issue from '../Issue/Issue';


class Issues extends React.Component {
    constructor() {
        super();
        this.state = {
            filter: 'SHOW_ALL',
        };
        this.filterIssues = this.filterIssues.bind(this);
    }
    componentDidMount() {
        const { getIssues } = this.props.actions;
        getIssues();
    }
    changeFilter(e, filter) {
        e.preventDefault();
        this.setState({
            filter,
        });
    }

    filterIssues() {
        const { issues } = this.props.issues;
        return issues
            .filter((issue) => {
                return this.state.filter === 'SHOW_ALL' ? issue.archived === false : issue.archived;
            })
            .map((issue) => {
                return (
                    <Issue
                        key={issue._id}
                        issue={issue}
                        delete={this.props.actions.removeIssue}
                        archive={this.props.actions.archiveIssue}
                    />
                );
            });
    }
    render() {
        return (
            <div className="mainContent issues-container">
                <header>
                    <h1>Issues</h1>
                    <nav className="issues-nav">
                        <a
                            href=""
                            onClick={(e) => { this.changeFilter(e, 'SHOW_ARCHIVED'); }}
                            aria-label="show archived issues"
                        >
                            <i className={this.state.filter === 'SHOW_ARCHIVED' ? 'fa fa-archive redLight' : 'fa fa-archive'} />
                        </a>
                        <a
                            href=""
                            onClick={(e) => { this.changeFilter(e, 'SHOW_ALL'); }}
                            aria-label="show active issues"
                        >
                            <i className={this.state.filter === 'SHOW_ALL' ? 'fa fa-th-large redLight' : 'fa fa-th-large'} />
                        </a>
                    </nav>
                </header>
                <section className="dashWrap">
                    {this.filterIssues()}
                </section>
            </div>
        );
    }

}

Issues.propTypes = {
    issues: PropTypes.shape({
        issues: PropTypes.array.isRequired,
    }).isRequired,
    actions: PropTypes.shape({
        getIssues: PropTypes.func.isRequired,
        removeIssue: PropTypes.func.isRequired,
        archiveIssue: PropTypes.func.isRequired,
    }).isRequired,
};

export default Issues;
