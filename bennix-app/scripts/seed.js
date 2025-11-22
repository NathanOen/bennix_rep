const { initializeApp } = require('firebase/app');
const { getFirestore, collection, doc, setDoc } = require('firebase/firestore');
require('dotenv').config({ path: '.env.local' });

const videos = [
    {
        id: '1',
        title: 'HATI-HATI TERJEBAK JUD0L‼️ BENNIX TEGASKAN MAIN DAN INVEST SAHAM HAL YANG BERBEDA',
        thumbnail: 'https://i.ytimg.com/vi/M21BXMGasq8/hqdefault.jpg',
        youtubeId: 'M21BXMGasq8',
        views: '15K views',
        date: '2 days ago',
        category: 'Analysis',
        duration: '10:23',
    },
    {
        id: '2',
        title: 'Learn Stocks For Beginners #1',
        thumbnail: 'https://i.ytimg.com/vi/GjXzhUrpqEE/hqdefault.jpg',
        youtubeId: 'GjXzhUrpqEE',
        views: '202K views',
        date: '1 year ago',
        category: 'Solution',
        duration: '40:52',
    },
    {
        id: '3',
        title: '6 RAHASIA PETER LYNCH !! CUAN RIBUAN PERSEN DI SAHAM !! INVESTOR WAJIB TAHU !!',
        thumbnail: 'https://i.ytimg.com/vi/LrG3hiK4Sgg/hqdefault.jpg',
        youtubeId: 'LrG3hiK4Sgg',
        views: '5K views',
        date: '1 month ago',
        category: 'Analysis',
        duration: '15:05',
    },
    {
        id: '4',
        title: 'ARE YOU TIRED OF BEING POOR? HERE ARE 4 STEPS TO FINANCIAL FREEDOM!',
        thumbnail: 'https://i.ytimg.com/vi/VxEx5-6fWTU/hqdefault.jpg',
        youtubeId: 'VxEx5-6fWTU',
        views: '762K views',
        date: '5 months ago',
        category: 'Analysis',
        duration: '12:00',
    },
    {
        id: '5',
        title: 'PURBAYA VS. LUHUT! MBG BAWA 756 TRILIUN KE EKONOMI RI? TAPI KOK DANA MBG 70 TRILIUN DIBALIKIN?',
        thumbnail: 'https://i.ytimg.com/vi/jfQ8dPeQ52w/hqdefault.jpg',
        youtubeId: 'jfQ8dPeQ52w',
        views: '1.2M views',
        date: '2 weeks ago',
        category: 'Solution',
        duration: '12:30',
    }
];

const categories = [
    "All Video",
    "Video With Solution",
    "Analysis",
    "Investment",
    "Mindset"
];

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function seedData() {
    const tenantId = 'bennix';
    console.log(`Seeding data for tenant: ${tenantId}...`);

    // Seed Videos
    for (const video of videos) {
        try {
            await setDoc(doc(db, 'tenants', tenantId, 'videos', video.id), video);
            console.log(`Uploaded video: ${video.title}`);
        } catch (error) {
            console.error(`Error uploading video ${video.id}:`, error);
        }
    }

    // Seed Categories
    for (const category of categories) {
        try {
            // Using category name as ID for simplicity, or generating one
            const catId = category.toLowerCase().replace(/\s+/g, '_');
            await setDoc(doc(db, 'tenants', tenantId, 'categories', catId), { name: category });
            console.log(`Uploaded category: ${category}`);
        } catch (error) {
            console.error(`Error uploading category ${category}:`, error);
        }
    }

    console.log('Seeding complete.');
}

seedData();
