import React from 'react';
import PropTypes from 'prop-types';

const MembersCard = ({ member, handleChange, index }) => {
    return (
        <ul className="memberList">
            <li key={member._id}>
                <p>
                    <strong>{member.firstName} {member.lastName}</strong>
                </p>
                <p>{member.email}</p>
                <p>
                    <span>1</span>
                    <span>Classroom</span>
                </p>
                <div className="inputBlock">
                    <div className="fieldRow">
                        <label htmlFor={member._id}>Instructor</label>
                        <input
                            type="checkbox"
                            value="instructor"
                            id={member._id}
                            onChange={handleChange}
                            data-index={index}
                        />
                    </div>
                    <div className="fieldRow">
                        <label htmlFor={member._id}>Admin</label>
                        <input
                            type="checkbox"
                            value="admin"
                            id={member._id}
                            onChange={handleChange}
                            data-index={index}
                        />
                    </div>
                </div>
                <p>
                    <span>Remove User?</span>
                    <i className="chalk-remove red" data-user={member._id} />
                </p>
            </li>
        </ul>
    );
};

MembersCard.propTypes = {
    member: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        admin: PropTypes.bool.isRequired,
        courseSections: PropTypes.array.isRequired,
        courses: PropTypes.array.isRequired,
        created_at: PropTypes.number.isRequired,
        email: PropTypes.string.isRequired,
        favoriteClassrooms: PropTypes.array.isRequired,
        firstName: PropTypes.string.isRequired,
        first_sign_up: PropTypes.bool.isRequired,
        instructor: PropTypes.bool.isRequired,
        lastName: PropTypes.string.isRequired,
        tests: PropTypes.array.isRequired,
        updated_at: PropTypes.number.isRequired,
    }).isRequired,
    handleChange: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
};

export default MembersCard;
