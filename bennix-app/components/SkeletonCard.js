import styles from '../app/page.module.css';

export default function SkeletonCard() {
    return (
        <div className={`${styles.card} ${styles.skeletonCard}`}>
            <div className={styles.skeletonThumbnail}></div>
            <div className={styles.skeletonContent}>
                <div className={styles.skeletonTitle}></div>
                <div className={styles.skeletonMeta}></div>
            </div>
        </div>
    );
}
