'use client';

import { useState } from 'react';
import styles from './page.module.css';
import Sidebar from '@/components/Sidebar';
import VideoCard from '@/components/VideoCard';
import { videos, categories } from '@/data/videos';

export default function Home() {
    const [selectedCategory, setSelectedCategory] = useState('All Video');

    const filteredVideos = selectedCategory === 'All Video'
        ? videos
        : videos.filter(video => video.category === selectedCategory || (selectedCategory === 'Video With Solution' && video.category === 'Solution'));

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
