'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';
import Sidebar from '@/components/Sidebar';
import VideoCard from '@/components/VideoCard';
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
            // Ensure "All Video" and "Video With Solution" are always present if not in DB or to enforce order
            // For now, assuming DB returns raw categories, we might want to prepend "All Video" manually if it's not in DB
            // The seed script adds "All Video" etc. so it should be fine, but let's handle it safely.
            setCategories(fetchedCategories.length > 0 ? fetchedCategories : ['All Video']);
            setLoading(false);
        };

        fetchData();
    }, []);

    const filteredVideos = selectedCategory === 'All Video'
        ? videos
        : videos.filter(video => video.category === selectedCategory || (selectedCategory === 'Video With Solution' && video.category === 'Solution'));

    if (loading) {
        return <div className={styles.container}><div className={styles.main}>Loading...</div></div>;
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
