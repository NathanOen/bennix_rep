'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';
import Sidebar from '@/components/Sidebar';
import VideoCard from '@/components/VideoCard';
import SkeletonCard from '@/components/SkeletonCard';
import { videoService } from '@/services/videoService';

export default function Home() {
    const [selectedCategory, setSelectedCategory] = useState('All Video');
    const [videos, setVideos] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const fetchedVideos = await videoService.getVideos('bennix');
            const fetchedCategories = await videoService.getCategories('bennix');

            setVideos(fetchedVideos);

            // Define the desired order
            const orderedCategories = ['All Video', 'Video With Solution'];

            // Get categories from DB that are NOT in the ordered list
            const otherCategories = fetchedCategories.filter(c => !orderedCategories.includes(c));

            // Combine: Ordered first, then the rest from DB
            const finalCategories = [...orderedCategories, ...otherCategories];

            setCategories(finalCategories);
            setLoading(false);
        };

        fetchData();
    }, []);

    const filteredVideos = selectedCategory === 'All Video'
        ? videos
        : videos.filter(video => video.category === selectedCategory || (selectedCategory === 'Video With Solution' && video.category === 'Solution'));

    if (loading) {
        return (
            <div className={styles.container}>
                <Sidebar
                    categories={['All Video', 'Video With Solution', 'Analysis', 'Investment', 'Mindset']}
                    selectedCategory={selectedCategory}
                    onSelectCategory={() => { }}
                />
                <main className={styles.main}>
                    <div className={styles.header}>
                        <h1>Loading...</h1>
                    </div>
                    <div className={styles.grid}>
                        {[...Array(6)].map((_, i) => (
                            <SkeletonCard key={i} />
                        ))}
                    </div>
                </main>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <Sidebar
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
            />
            <main className={styles.main}>
                <div className={styles.header}>
                    <h1>{selectedCategory}</h1>
                </div>
                <div className={styles.grid}>
                    {filteredVideos.map((video) => (
                        <VideoCard key={video.id} video={video} />
                    ))}
                </div>
            </main>
        </div>
    );
}
