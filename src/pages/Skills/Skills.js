import React from 'react';

export default function Projects() {
    const skills = 'Навыки_&_Опыт';

    function stringToArray($str) {
        return $str.split('')
    }

    return (
        <div className="skills">

            <div className="skills__title">
                <h1>
                    {stringToArray(skills).map((char, index) => <span key={index} className="skills__title-char skills__title-anim main-title">{char}</span>)}
                </h1>

                <hr/>

                <div className="skills__title-description main-description">
                    <p>Основная область моей специализации - Front End разработка (клиентская часть).</p>

                    <p>HTML, CSS, JS, создание небольших веб приложений с помощью React. У меня так же имеется опыт разработки сайтов с системой управления контентом (CMS WordPress).</p>
                </div>

            </div>

            <div className="home__animation">
                <div className="home__animation-circle"></div>
                <div className="home__animation-circle"></div>
            </div>

        </div>



    )
}
