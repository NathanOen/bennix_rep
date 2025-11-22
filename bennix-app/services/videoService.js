import { db } from '../lib/firebase';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';

export const videoService = {
    async getVideos(tenantId) {
        try {
            const videosRef = collection(db, 'tenants', tenantId, 'videos');
            const snapshot = await getDocs(videosRef);
            return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        } catch (error) {
            console.error("Error fetching videos:", error);
            return [];
        }
    },

    async getVideoById(tenantId, videoId) {
        try {
            const videoRef = doc(db, 'tenants', tenantId, 'videos', videoId);
            const videoSnap = await getDoc(videoRef);

            if (videoSnap.exists()) {
                return { id: videoSnap.id, ...videoSnap.data() };
            } else {
                return null;
            }
        } catch (error) {
            console.error("Error fetching video:", error);
            return null;
        }
    },

    async getCategories(tenantId) {
        try {
            const categoriesRef = collection(db, 'tenants', tenantId, 'categories');
            const snapshot = await getDocs(categoriesRef);
            return snapshot.docs.map(doc => doc.data().name);
        } catch (error) {
            console.error("Error fetching categories:", error);
            return [];
        }
    }
};
