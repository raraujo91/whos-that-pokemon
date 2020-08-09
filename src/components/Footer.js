import React from 'react';

const usedTools = [
    {
        name: "Caffeine",
        emoji: "☕"
    },
    {
        name: "Create React App",
        emoji: "⚛️"
    },
    {
        name: "React Hooks",
        emoji: "🏴‍☠️"
    },
    {
        name: "Tailwind CSS",
        emoji: "💅"
    },
]

const Footer = () => {
    return (
        <div className="absolute flex flex-row justify-center items-center bg-black w-screen h-8 bottom-0">
            <div className="relative flex items-center flex-1 h-full text-white font-thin">
                <span className="absolute right-0 mr-1">
                    <a className="decoration-none font-bold" href="https://github.com/raraujo91" rel="noopener noreferrer" target="blank">raraujo91</a> created this with
                </span>
            </div>
            <div className="relative flex items-center flex-1 h-full text-white font-bold">
                {
                    usedTools.map((tool, idx) => {
                        return <span key={idx} className="footer-animation absolute" style={{ animationDelay: idx * 2 + "s" }}>{tool.name} <span role="img" aria-label="emoji">{tool.emoji}</span></span>
                    })
                }
            </div>
        </div >
    )
}

export default Footer;