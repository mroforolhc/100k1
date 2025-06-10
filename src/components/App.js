import { useState } from "react";
import Game from './Game';



export default function App() {
    const data = [
        {
            round: '1',
            answers: [
                { text: 'Аналитик', score: 7 },
                { text: 'Врач', score: 6 },
                { text: 'Учитель', score: 5 },
                { text: 'Воспитатель ', score: 3 },
                { text: 'Консультант', score: 2 },
                { text: 'Бухгалтер ', score: 1 },
            ],
        },
        {
            round: '2',
            answers: [
                { text: 'Обувь', score: 7 },
                { text: 'Платье', score: 6 },
                { text: 'сумочка', score: 5 },
                { text: 'блузка', score: 4 },
                { text: 'Юбка', score: 3 },
                { text: 'нижнее белье', score: 2 },
            ],
        },
        {
            round: '3',
            answers: [
                { text: 'Красота', score: 9 },
                { text: 'Забота/Ласка', score: 6 },
                { text: 'Ум', score: 5 },
                { text: 'Душа', score: 4 },
                { text: 'искренность', score: 3 },
                { text: 'Умение готовить', score: 2 },
            ],
        },
        {
            round: '?',
            answers: [
                { text: 'Деньги  ', score: 5 },
                { text: 'сертификат', score: 10 },
                { text: 'Билеты', score: 30 },
                { text: 'Документ', score: 50 },
                { text: 'Открытка', score: 70 },
                { text: 'повестка', score: 100 },
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