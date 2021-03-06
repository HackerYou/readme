import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Forms/Input/Input';

const MembersCard = ({ member, handleChange, index, removeUser }) => {
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
                        <Input
                            labelText="Instructor"
                            name="instAdmin"
                            type="checkbox"
                            value="instructor"
                            handleChange={() => handleChange(index, 'instructor', member.instructor)}
                            checked={member.instructor}
                            index={index}
                            labelInline
                            largeLabel
                        />
                    </div>
                    <div className="fieldRow">
                        <Input
                            labelText="Admin"
                            name="instAdmin"
                            type="checkbox"
                            value="admin"
                            handleChange={() => handleChange(index, 'admin', member.admin)}
                            checked={member.admin}
                            index={index}
                            labelInline
                            largeLabel
                        />
                    </div>
                </div>
                <p>
                    <span>Remove User?</span>
                    <i
                        className="chalk-remove red"
                        data-user={member._id}
                        onClick={e => removeUser(e, member._id)}
                    />
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
    removeUser: PropTypes.func.isRequired,
};

export default MembersCard;
