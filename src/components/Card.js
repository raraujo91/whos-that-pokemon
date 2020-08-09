import React, { useState, useEffect } from 'react'
import Input from './Input'

const Card = ({ pokemon, handler }) => {

    const [rightAnswer, setRightAnswer] = useState(false);

    let { id, name } = JSON.parse(pokemon);

    useEffect(() => {
        setRightAnswer(false);
    }, [name]);

    const handleRightAnswer = () => {
        setRightAnswer(true);
        setTimeout(() => {
            handler(id);
        }, 800);

    }

    return (
        <div className={`shadow-lg h-auto ${rightAnswer ? `right-answer` : ''}`}>
            <div className={`${id === 0 ? `bg-red-700` : `bg-white`} w-auto h-auto p-8 rounded-t-lg flex items-center justify-center`}>
                {id === 0 ?
                    (
                        <div className="relative h-auto flex flex-col justify-center items-center text-white">
                            <p className="font-bold text-3xl">Congrats!</p>
                            <p className="font-thin">You are a Pokemon master!</p>
                        </div>) :
                    (
                        <img className={`w-48 ${rightAnswer ? `reveal-pokemon` : ``}`} src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt="Hidden Pokemon" id="pokemon" />
                    )}
            </div>
            <Input name={name} handler={handleRightAnswer} completed={id === 0 ? true : false} />
        </div >
    )
}

export default Card;