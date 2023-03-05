import { useState } from 'react';
import styles from './style/Error.module.css';

export default function Error() {
    const audio = new Audio(process.env.PUBLIC_URL + '/sounds/error.mp3');
    const [isActive, setIsActive] = useState(false);

    function handleClick() {
        setIsActive(true);
        if (!isActive) audio.play();
    }

    return (
        <div
            className={`${styles.errorButton} ${isActive ? styles.errorButtonActive : ''}`}
            onClick={handleClick}
        />
    );
}
