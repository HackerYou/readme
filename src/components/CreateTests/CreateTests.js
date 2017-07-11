import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Forms/Input/Input';

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
                        <Input
                            name="testName"
                            type="text"
                            labelText="What is the name of the test?"
                            value=""
                        />
                        <Input
                            type="submit"
                            name="submit"
                            value="submit"
                        />
                        <div className="fieldRow">
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

