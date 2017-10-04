import React from 'react';
import PropTypes from 'prop-types';
import Issue from '../Issue/Issue';


class Issues extends React.Component {
    componentDidMount() {
        const { getIssues } = this.props.actions;
        getIssues();
    }

    render() {
        const { issues } = this.props.issues;
        return (
            <div className="mainContent container">
                <header>
                    <h1>Issues</h1>
                    <nav className="issues-nav">
                        {/* <i className="fa fa-archive redLight"> </i>
                        <i className="fa fa-th-large"> </i> */}
                    </nav>
                </header>
                <section className="dashWrap">
                    {issues.map(issue => <Issue key={issue._id} issue={issue} />)}
                </section>
            </div>
        );
    }

}

Issues.propTypes = {
    issues: PropTypes.arrayOf(PropTypes.object).isRequired,
    actions: PropTypes.shape({
        getIssues: PropTypes.func.isRequired,
    }).isRequired,
};

export default Issues;
