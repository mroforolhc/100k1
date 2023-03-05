import { useState } from "react";
import Game from './Game';



export default function App() {
    const data = [
        {
            round: '1',
            answers: [
                { text: '1.1', score: 35 },
                { text: '1.2', score: 30 },
                { text: '1.3', score: 20 },
                { text: '1.4', score: 10 },
                { text: '1.5', score: 4 },
                { text: '1.6', score: 1 },
            ],
        },
        {
            round: '2',
            answers: [
                { text: '2.1', score: 35 },
                { text: '2.2', score: 30 },
                { text: '2.3', score: 20 },
                { text: '2.4', score: 10 },
                { text: '2.5', score: 4 },
                { text: '2.6', score: 1 },
            ],
        },
        {
            round: '3',
            answers: [
                { text: '3.1', score: 35 },
                { text: '3.2', score: 30 },
                { text: '3.3', score: 20 },
                { text: '3.4', score: 10 },
                { text: '3.5', score: 4 },
                { text: '3.6', score: 1 },
            ],
        },
        {
            round: '?',
            answers: [
                { text: '4.1', score: 35 },
                { text: '4.2', score: 30 },
                { text: '4.3', score: 20 },
                { text: '4.4', score: 10 },
                { text: '4.5', score: 4 },
                { text: '4.6', score: 1 },
            ],
        },
    ];

    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [isReady, setIsReady] = useState(false);

    function handleClick() {
        if (firstName.length && secondName.length) {
            setIsReady(true);
        }
    }

    return (
        <>
            {isReady ? (
                <Game data={data} firstTeamName={firstName} secondTeamName={secondName} />
            ) : (
                <>
                    <label>Название первой команды:</label>
                    <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
                    <br />
                    <label>Название второй команды:</label>
                    <input type="text" value={secondName} onChange={e => setSecondName(e.target.value)} />
                    <br />
                    <button onClick={handleClick}>СТАРТ</button>
                </>
            )}
        </>
    )
}