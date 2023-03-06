import { useState } from 'react';
import styles from './style/Answer.module.css';

export default function Answer({ num, answer, onRightAnswer }) {
    const audioRightAnswer = new Audio(process.env.PUBLIC_URL + '/sounds/rightAnswer.mp3');
    const audioError = new Audio(process.env.PUBLIC_URL + '/sounds/error.mp3');
    const [isActive, setIsActive] = useState(false);

    function handleClick(e) {
        e.preventDefault();

        if (!isActive) {
            if (e.type === 'click') {
                audioRightAnswer.play();
                onRightAnswer(answer.score);
            } else if (e.type === 'contextmenu') {
                audioError.play();
            }
        }

        setIsActive(true);
    }

    return (
        <div
            className={`${styles.lineWrapper} ${isActive ? styles.hover : ''}`}
            onClick={handleClick}
            onContextMenu={handleClick}
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
