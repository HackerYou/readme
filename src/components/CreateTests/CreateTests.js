import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Forms/Input/Input';
import Select from '../Forms/Select/Select';
import QuestionCard from '../QuestionCard/QuestionCard';

class CreateTests extends React.Component {
    componentDidMount() {
        const { getCourse, retrieveQuestions } = this.props.actions;
        const { classroom_id } = this.props.match.params;
        getCourse(classroom_id);
        retrieveQuestions();
    }
    render() {
        const options = [
            {
                text: 'yes',
                value: 'true',
            },
            {
                text: 'no',
                value: 'false',
            },
        ];
        const { questions } = this.props.tests;
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
                            <Select
                                value="cat"
                                chosenVal="value"
                                chosenKey="text"
                                name="cat"
                                options={options}
                            />
                        </div>
                    </form>
                </section>
                <section className="full">
                    <h2>Title of test goes here:</h2>
                    <article className="questionCard__wrapper">
                        {questions.map(({ title, difficulty, type, category }) => {
                            return (
                                <QuestionCard
                                    title={title}
                                    category={category}
                                    difficulty={difficulty}
                                    type={type}
                                />
                            );
                        })}
                    </article>
                </section>
            </div>
        );
    }
}

CreateTests.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.object.isRequired,
    }).isRequired,
    tests: PropTypes.shape({
        questions: PropTypes.arrayOf.isRequired,
    }).isRequired,
    actions: PropTypes.shape({
        getCourse: PropTypes.func.isRequired,
        retrieveQuestions: PropTypes.func.isRequired,
    }).isRequired,
};

export default CreateTests;

