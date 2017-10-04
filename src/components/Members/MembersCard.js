import React from 'react';

const MembersCard = () => {
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

export default MembersCard;

