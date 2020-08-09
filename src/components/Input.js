import React, { useState, useRef, useEffect } from 'react';

const Input = ({ name, handler, completed }) => {

    const [rightAnswer, setRightAnswer] = useState(false);
    const [pokemonInput, setPokemonInput] = useState('');
    const textInput = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!pokemonInput) setRightAnswer(pokemonInput === name);
        }, 700);

        return () => {
            clearTimeout(timer);
        }
    });

    const colorHandler = () => {
        if (pokemonInput.length === 0) {
            return 'bg-black text-white'
        } else if (rightAnswer) {
            return 'bg-green-600 text-white'
        } else {
            return 'bg-red-600 text-white'
        }
    }

    const handleChange = (event) => {
        const answer = event.target.value;
        setPokemonInput(answer);

        if (answer.toLowerCase() === name) {
            setRightAnswer(true);
            handler();
            setTimeout(() => {
                setRightAnswer(false);
                setPokemonInput('');
            }, 1200);
        } else {
            if (rightAnswer) setRightAnswer(false);
        }
    };

    // completed ? `bg-white text-black` : `bg-black text-white`

    return (
        <input ref={textInput} onChange={handleChange} value={pokemonInput} autoFocus={true} className={`${colorHandler()} uppercase text-center font-extrabold text-lg w-full p-6 rounded-b-md`} disabled={rightAnswer || completed} type="text" placeholder={completed ? "Thank you!" : "Who's that Pokemon?"} />
    )
}

export default Input;   