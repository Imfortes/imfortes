import React from 'react';


export default function Home() {
    const hello = 'Приветствую,';
    const name = 'Я,_Завершнев_Александр,';
    const profession = 'Web_разработчик.';
    const skillsDescription = 'Front_End_Developer_/_Wordpress_Expert'

    function stringToArray($str) {
        return $str.split('')
    }

    return (
        <div className="home">
            <div className="home__title">
                <h1>
                    {stringToArray(hello).map((char, index) => <span key={index} className="home__title-char home__title-anim main-title">{char}</span>)}
                    <br/>
                    {stringToArray(name).map((char, index) => <span key={index} className="home__title-char home__title-anim main-title">{char}</span>)}
                    <br/>
                    {stringToArray(profession).map((char, index) => <span key={index} className="home__title-char home__title-anim main-title">{char}</span>)}
                    <br/>
                    <hr/>
                    {stringToArray(skillsDescription).map((char, index) => <span key={index} className="home__title-char home__title-description main-description">{char}</span>)}
                </h1>
                <a href="" className="home__title-feedback main-btn">Связаться</a>
            </div>
            <div className="home__animation">
                <div className="home__animation-circle"></div>
                <div className="home__animation-circle"></div>
            </div>
        </div>
    )
}
