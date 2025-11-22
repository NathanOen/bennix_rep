
# Bennix Technical Doc

## Introduction
Bennix is a pwa to answer the need of Indonesia Investment PodCaster Bennix (ref: https://www.youtube.com/@Bennix). I promised on one of his youtube to build bennix.pasar.app. 

The premise is to have solution on his YT video that we can provide for them in Indonesia. One of the video is about MBG Makanan Bergizi Gratis (ref: https://www.youtube.com/watch?v=MBG_Makanan_Bergizi_G Gratis). This program that also align with me. 

## Story
MBG Makanan Bergizi Gratis on one of Bennix video (see ref: https://www.youtube.com/watch?v=MBG_Makanan_Bergizi_G Gratis) really need a solution. I promised to build it. The list of application would be index.html a one page application that allow user to "play" that application from the list of his video that we will list in the application bennix.pasar.app. This is video: https://www.youtube.com/watch?v=jfQ8dPeQ52w


## Iteration1
*   **Objective**: Build a Next.js PWA to list specific videos.
*   **Features**:
    *   List specific videos from the Bennix YouTube channel.
    *   "Play" application from the list of videos.
    *   **Filter Panel**: Left sidebar to filter videos (e.g., "All Video", "Video With Solution").
*   **UI Design**:
    *   **YouTube-like Interface**: Video cards with thumbnails, titles, and meta information.
    *   **Layout**: Horizontal scrolling or grid layout similar to the YouTube app.
    *   **Filter Panel**: Left sidebar with categories.
    *   **Theme**: **Dark Mode** by default.
*   **Tech Stack**:
    *   **Framework**: Next.js (for PWA capabilities and performance).
    *   **Styling**: Vanilla CSS (to achieve a custom, premium look).
    *   **PWA**: Manifest file, Service Worker for offline capabilities and installability.
*   **Data Strategy**:
    *   Curated list of videos (initially a static JSON or config file).

## Deployment
*   **Platform**: **Firebase App Hosting**.
*   **Strategy**:
    *   Initialize Firebase in the project (`firebase init`).
    *   Configure App Hosting to connect to the GitHub repository.
    *   Automatic builds and deployments on push to `main`.

## Iteration2
*   **Objective**: Implement the "Play" functionality for Solution videos, specifically the MBG (Makanan Bergizi Gratis) program.
*   **Features**:
    *   **Video Detail Page**: Dynamic routing to view specific videos.
    *   **YouTube Player**: Embed the YouTube video for playback.
    *   **Solution Playground**: An interactive area for "Solution" category videos.
    *   **MBG Mini-App**: A specific interactive tool for the MBG video (e.g., a cost/logistics simulator).
*   **UI Design**:
    *   **Layout**: Video player at the top (or left), interactive solution app below (or right).
    *   **Navigation**: Back button to return to the video list.


## Iteration3

*   **Objective**: Design and implement a scalable, multi-tenant Firestore database architecture to support the Bennix app and future applications.
*   **Architecture & Design**:
    *   **Multi-tenancy Strategy**: Root-level `tenants` collection to isolate data per application.
    *   **Schema**:
        *   `tenants/{tenantId}`: Tenant configuration (branding, theme, settings).
        *   `tenants/{tenantId}/videos/{videoId}`: Video content.
        *   `tenants/{tenantId}/categories/{categoryId}`: Category definitions.
*   **Features**:
    *   **Firestore Integration**: Configure Firebase SDK in the Next.js app.
    *   **Data Seeding**: Migration script to upload current static `videos.js` data to Firestore under the `bennix` tenant.
    *   **Service Layer**: Abstract data fetching to switch between static/live data easily.
    *   **Dynamic Content**: App fetches content based on the active tenant.