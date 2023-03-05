import { useState } from 'react';
import styles from './style/Game.module.css';
import ScoreBoard from './ScoreBoard';
import GameBoard from './GameBoard';

export default function Game({ data, firstTeamName, secondTeamName }) {
    const [step, setStep] = useState(0);
    const [tempScore, setTempScore] = useState(0);
    const [firstTeamScore, setFirstTeamScore] = useState(0);
    const [secondTeamScore, setSecondTeamScore] = useState(0);

    function nextRound() {
        if (step < data.length - 1) {
            setStep(step + 1);
        }
    }

    function handleRightAnswer(score) {
        const coefficientMap = { '1': 1, '2': 2, '3': 3, '?': 1 };
        setTempScore(tempScore + score * (coefficientMap[data[step].round]));
    }

    function handleUpdateScoreTeam(team) {
        switch (team) {
            case 1:
                setFirstTeamScore(firstTeamScore + tempScore);
                break;
            case 2:
                setSecondTeamScore(secondTeamScore + tempScore);
                break;
            default:
                break;
        }

        setTempScore(0);
    }

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.topScore}>
                    <ScoreBoard score={tempScore} />
                </div>

                <div className={styles.game}>
                    <div className={styles.leftScore}>
                        <div className={styles.teamName}>{firstTeamName}</div>
                        <ScoreBoard score={firstTeamScore} onClick={() => handleUpdateScoreTeam(1)} />
                    </div>

                    <GameBoard info={data[step].round} answers={data[step].answers} onRightAnswer={handleRightAnswer} />

                    <div className={styles.rightScore}>
                        <div className={styles.teamName}>{secondTeamName}</div>
                        <ScoreBoard score={secondTeamScore} onClick={() => handleUpdateScoreTeam(2)} />
                    </div>
                </div>

                {step < data.length - 1 && <button className={styles.nextRound} onClick={nextRound}>Следующий раунд</button>}
            </div>

        </div>
    );
}
