import React from 'react';
import PropTypes from 'prop-types';

const MembersCard = ({ members }) => {
    return (
        <ul className="memberList">
            {members.map((member) => {
                return (
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
                                <input type="checkbox" id={member._id} />
                            </div>
                            <div className="fieldRow">
                                <label htmlFor={member._id}>Admin</label>
                                <input type="checkbox" id={member._id} />
                            </div>
                        </div>
                        <p>
                            <span>Remove User?</span>
                            <i className="chalk-remove red" data-user={member._id} />
                        </p>
                    </li>
                );
            })}
        </ul>
    );
};

MembersCard.propTypes = {
    members: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MembersCard;

