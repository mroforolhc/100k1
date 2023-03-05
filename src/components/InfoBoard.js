import styles from './style/InfoBoard.module.css';
import Error from './Error';

export default function InfoBoard({ info }) {
    return (
        <div className={styles.board}>
            <div className={styles.roundBlock}>
                {info}
            </div>

            <div className={styles.errors}>
                {new Array(3).fill(0).map((_, i) => <Error key={info + i} />)}
            </div>
        </div>
    );
}
