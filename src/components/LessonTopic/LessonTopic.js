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
            issue: '',
            topicId: '',
            title: '',
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        const { topic } = this.props;
        this.setState({
            topicId: topic._id,
            title: topic.title,
        });
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
    handleChange(e) {
        this.setState({
            issue: e.target.value,
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
                    <form
                        className="modalBody card flagForm"
                        onSubmit={(e) => {
                            this.props.addIssue(
                                e,
                                this.state.issue,
                                this.state.topicId,
                                this.state.title,
                                );
                        }}
                        data-id={topic._id}
                    >
                        <i onClick={this.closeModal} className="fa fa-times chalk-close" />
                        <label htmlFor="issueNote">
                            What is your issue? Add a description here and we will fix it for you!
                    </label>
                        <textarea
                            name="issueNote"
                            onChange={this.handleChange}
                        />
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
    addIssue: PropTypes.func.isRequired,
};

export default LessonTopic;
