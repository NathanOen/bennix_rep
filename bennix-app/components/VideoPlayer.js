import React from 'react';
import styles from '../app/page.module.css';

const VideoPlayer = ({ youtubeId }) => {
    if (!youtubeId) return null;

    return (
        <div className={styles.videoPlayerWrapper}>
            <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${youtubeId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default VideoPlayer;
