import { useState } from 'react';
import styles from './style/Answer.module.css';

export default function Answer({ num, answer, onRightAnswer }) {
    const audio = new Audio(process.env.PUBLIC_URL + '/sounds/rightAnswer.mp3');
    const [isActive, setIsActive] = useState(false);

    function handleClick() {
        setIsActive(true);
        if (!isActive) audio.play();
        onRightAnswer(answer.score);
    }

    return (
        <div
            className={`${styles.lineWrapper} ${isActive ? styles.hover : ''}`}
            onClick={handleClick}
        >
            <div className={styles.line}>
                <div className={styles.front}>{num}</div>

                <div className={styles.back}>
                    <div className={styles.answerText}>{answer.text}</div>
                    <div className={styles.score}>{answer.score}</div>
                </div>
            </div>
        </div>
    );
}
