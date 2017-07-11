import React from 'react';
import PropTypes from 'prop-types';


class CreateTests extends React.Component {
    componentDidMount() {
        const { getCourse } = this.props.actions;
        const { classroom_id } = this.props.match.params;
        getCourse(classroom_id);
    }
    render() {
        return (
            <div className="classCard">
                <section className="full detailsForm card">
                    <form action="">
                        <label htmlFor="testName">What is the name of the test?</label>
                        <input name="testName" type="text" />
                        <input type="submit" />
                        <div className="filedRow">
                            <label htmlFor="show">Show test in classroom</label>
                            <select name="show" id="show">
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                            </select>
                        </div>
                    </form>
                </section>
            </div>
        );
    }
}

CreateTests.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.object.isRequired,
    }).isRequired,
    actions: PropTypes.shape({
        getCourse: PropTypes.func.isRequired,
    }).isRequired,
};

export default CreateTests;

