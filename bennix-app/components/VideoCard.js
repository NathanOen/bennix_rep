import React from 'react';
import Link from 'next/link';
import styles from '../app/page.module.css';

const VideoCard = ({ video }) => {
    const isSolution = video.category === 'Solution';
    return (
        <Link href={`/video/${video.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className={`${styles.card} ${isSolution ? styles.solutionCard : ''}`}>
                <div className={styles.thumbnailWrapper}>
                    {/* Using a placeholder color if image fails, or use Next/Image */}
                    <div className={styles.thumbnail} style={{ backgroundImage: `url(${video.thumbnail})` }}>
                        <span className={styles.duration}>{video.duration}</span>
                    </div>
                </div>
                <div className={styles.content}>
                    <h3 className={styles.title}>{video.title}</h3>
                    <div className={styles.meta}>
                        <span>{video.views}</span>
                        <span className={styles.dot}>•</span>
                        <span>{video.date}</span>
                    </div>
                    <div className={styles.category}>{video.category}</div>
                </div>
            </div>
        </Link>
    );
};

export default VideoCard;
