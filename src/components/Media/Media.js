import React from 'react';
import PropTypes from 'prop-types';

class Media extends React.Component {
    componentDidMount() {
        const { getMedia } = this.props.actions;
        getMedia();
    }
    render() {
        const { media } = this.props.media;
        return (
            <div className="mainContent container">
                <h1>Media Stub</h1>
                {media.map(mediaInd => <p key={mediaInd._id}>{mediaInd.name}</p>)}
            </div>
        );
    }
}

Media.propTypes = {
    media: PropTypes.shape({
        media: PropTypes.arrayOf.isRequired,
    }).isRequired,
    actions: PropTypes.shape({
        getMedia: PropTypes.func.isRequired,
    }).isRequired,
};

export default Media;
