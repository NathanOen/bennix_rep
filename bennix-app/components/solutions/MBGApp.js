import React from 'react';
import styles from '../../app/page.module.css';

const MBGApp = () => {
    return (
        <div className={styles.mbgAppContainer}>
            <h2>MBG Program Simulator</h2>
            <p>Interactive tool for Makanan Bergizi Gratis program coming soon.</p>
            <div className={styles.placeholderTool}>
                <p>Budget Simulator Placeholder</p>
            </div>
        </div>
    );
};

export default MBGApp;
