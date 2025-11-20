import React from 'react';
import styles from '../app/page.module.css';

const Sidebar = ({ categories, selectedCategory, onSelectCategory }) => {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.logo}>
                <h2>Bennix</h2>
            </div>
            <nav className={styles.nav}>
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`${styles.navItem} ${selectedCategory === category ? styles.active : ''}`}
                        onClick={() => onSelectCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;
