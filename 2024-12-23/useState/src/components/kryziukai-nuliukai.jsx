import { useState } from 'react';
import './kryziukai.css'

const Game = () => {
    const [ended, setEnded] = useState(false); // Žaidimo būsena: baigta ar ne
    const [x, setX] = useState(true); // Kuris žaidėjas dabar: `true` reiškia `X`, `false` reiškia `0`
    const [board, setBoard] = useState(Array(9).fill('')); // Žaidimo lenta
    const [result, setResult] = useState(''); // Rezultatas (tekstas apie laimėtoją)

    const winningPos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const startGame = () => {
        setBoard(Array(9).fill('')); // Išvalome lentą
        setEnded(false); // Nustatome, kad žaidimas nebaigtas
        setX(true); // Pradeda X
        setResult(''); // Išvalome rezultatą
    };

    const handleClick = (index) => {
        if (ended || board[index] !== '') return; 
        const newBoard = [...board];
        newBoard[index] = x ? 'X' : '0'; // Pridėti X arba 0
        setBoard(newBoard);
        setX(!x); // Pakeisti žaidėją

        checkWinner(newBoard);
    };

    const checkWinner = (newBoard) => {
        for (const pos of winningPos) {
            const [a, b, c] = pos;
            if (
                newBoard[a] &&
                newBoard[a] === newBoard[b] &&
                newBoard[a] === newBoard[c]
            ) {
                setResult(`Laimėtojas yra: ${newBoard[a]}`);
                setEnded(true);
                return;
            }
        }

        if (!newBoard.includes('')) {
            setResult('Rezultatas: Lygiosios');
            setEnded(true);
        }
    };

    return (
        <div>
            <button onClick={startGame}>Pradėti</button>
            <div className="zaidimas">
                {board.map((cell, index) => (
                    <button key={index} onClick={() => handleClick(index)}> {cell} </button>
                ))}
            </div>
            <h2 className="rezultatas"> {result} </h2>
        </div>
    );
};

export default Game;