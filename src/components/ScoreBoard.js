import styles from './style/ScoreBoard.module.css';

export default function ScoreBoard({ score, onClick }) {
    return (
        <div className={styles.board} onClick={onClick}>
            {score || 0}
        </div>
    );
}
