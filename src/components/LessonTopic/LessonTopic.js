import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-remarkable';
import Prism from 'prismjs';
import { Link } from 'react-router-dom';

import Modal from '../Modal/Modal';


const prs = () => {
    try {
        return Prism.highlightAll(false);
    } catch (err) {
        return '';
    }
};

class LessonTopic extends React.Component {
    constructor() {
        super();
        this.state = {
            isModalOpen: false,
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    openModal(e) {
        e.preventDefault();
        this.setState({
            isModalOpen: true,
        });
    }
    closeModal(e) {
        e.preventDefault();
        this.setState({
            isModalOpen: false,
        });
    }
    render() {
        const { topic, admin } = this.props;
        return (
            <div className="lessonTopic">
                <h2 className="lessonTitle">{topic.title} {admin &&
                    <div className="flag-in-topic">
                        <Link to={`/topic/${topic._id}`}><i className="fa fa-pencil topic-edit" /></Link>
                        <i className="fa fa-flag topic-edit" onClick={this.openModal} />
                    </div>
                }
                </h2>
                <Markdown options={{ html: true, highlight: prs }}>{topic.body}</Markdown>
                <Modal isOpen={this.state.isModalOpen}>
                    <form className="modalBody card flagForm">
                        <i onClick={this.closeModal} className="fa fa-times chalk-close" />
                        <label htmlFor="issueNote">
                            What is your issue? Add a description here and we will fix it for you!
                    </label>
                        <textarea name="issueNote" />
                        <br />
                        <input type="submit" value="Send" />
                    </form>
                </Modal>
            </div>
        );
    }
}


LessonTopic.propTypes = {
    topic: PropTypes.shape({
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
    }).isRequired,
    admin: PropTypes.bool.isRequired,

};

export default LessonTopic;
