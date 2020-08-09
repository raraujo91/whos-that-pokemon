import React from 'react';

const Box = ({ type, mark }) => {
    return (
        <div className="bg-gray-900 w-32 p-4 rounded-lg border-opacity-25 border-2 border-white flex flex-col justify-center items-center">
            <p className="uppercase text-white text-md">{type}</p>
            <p className="text-white text-6xl font-black -mt-4">{mark}</p>
        </div>
    )
}

export default Box;