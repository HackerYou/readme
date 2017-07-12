import React from 'react';
import PropTypes from 'prop-types';

const TestResultsCard = ({ student }) => {
    const { firstName, lastName, tests } = student;
    const testsArray = Object.keys(tests).map(key => tests[key]);

    const displayTest = (test) => {
        const outOf = test.answers.length;
        const correct = test.answers.filter(answer => answer.correct).length;
        const passed = (correct / outOf) > 0.6;
        const modifier = passed ? 'pass' : 'fail';
        return (
            <li className="testProgress__test" key={test._id}>
                <div className={`testProgress__circles testProgress__circles--${modifier}`}>
                    <i className="fa fa-check" />
                </div>
                <span className="testProgress__testName">
                    {test.title}
                </span>
                <span>&nbsp;{`${correct}/${outOf}`} </span>
            </li>
        );
    };
    return (
        <div className="classCard">
            <article className="card">
                <h3 className="studentName">{firstName} {lastName}</h3>
                <div className="progressCard">
                    <ul className="testProgress">
                        {testsArray.map(test => displayTest(test))}
                    </ul>
                </div>
            </article>
        </div>
    );
};

TestResultsCard.propTypes = {
    student: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
    }).isRequired,
};

export default TestResultsCard;
