import Link from 'next/link';
import { videoService } from '../../../services/videoService';
import VideoPlayer from '../../../components/VideoPlayer';
import MBGApp from '../../../components/solutions/MBGApp';
import styles from '../../../app/page.module.css';

export default async function VideoDetail({ params }) {
    const { id } = await params;
    const video = await videoService.getVideoById('bennix', id);

    if (!video) {
        return <div className={styles.container}>Video not found</div>;
    }

    const isSolution = video.category === 'Solution';
    const isMBG = video.youtubeId === 'jfQ8dPeQ52w';

    return (
        <div className={styles.detailContainer}>
            <Link href="/" className={styles.backButton}>
                ← Back to Home
            </Link>

            <VideoPlayer youtubeId={video.youtubeId} />

            <div className={styles.content}>
                <h1 className={styles.title} style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{video.title}</h1>
                <div className={styles.meta}>
                    <span>{video.views}</span>
                    <span className={styles.dot}>•</span>
                    <span>{video.date}</span>
                </div>
                <div className={styles.category} style={{ marginTop: '10px' }}>{video.category}</div>
            </div>

            {isSolution && isMBG && (
                <MBGApp />
            )}
        </div>
    );
}
