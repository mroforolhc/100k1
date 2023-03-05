import styles from './style/GameBoard.module.css';
import InfoBoard from './InfoBoard';
import Answer from './Answer';

export default function GameBoard({ answers, info, onRightAnswer }) {
    return (
        <div className={styles.board}>
            <div className={styles.sideLeft}>
                <InfoBoard info={info} />
            </div>

            <div className={styles.answers}>
                {answers.map((answer, i) => (
                    <Answer
                        answer={answer}
                        key={info + i}
                        num={i + 1}
                        onRightAnswer={onRightAnswer}
                    />
                ))}
            </div>

            <div className={styles.sideRight}>
                <InfoBoard info={info} />
            </div>
        </div>
    );
}
