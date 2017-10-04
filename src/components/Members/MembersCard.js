import React from 'react';
import PropTypes from 'prop-types';

const MembersCard = ({ members }) => {
    console.log(members);
    return (
        <ul className="memberList">
            <li>
                <p>
                    <strong>Sylvia Nguyen</strong>
                </p>
                <p>sylvia@hackeryou.com</p>
                <p>
                    <span>1</span>
                    <span>Classroom</span>
                </p>
                <div className="inputBlock">
                    <div className="fieldRow">
                        <label htmlFor="12">Instructor</label>
                        <input type="checkbox" id="12" />
                    </div>
                </div>
            </li>
        </ul>
    );
};

MembersCard.propTypes = {
    members: PropTypes.shape({
        instructors: PropTypes.array.isRequired,
    }).isRequired,
};

export default MembersCard;

