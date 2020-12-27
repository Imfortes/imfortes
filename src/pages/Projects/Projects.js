import React from 'react';

export default function Projects() {
    const porfolio = 'Портфолио';

    function stringToArray($str) {
        return $str.split('')
    }

    return (
        <div className="projects">

            <div className="projects__title">

                <h1 className="main-children-wrapper">
                    {stringToArray(porfolio).map((char, index) => <span key={index} className="home__title-char home__title-anim main-title">{char}</span>)}
                </h1>

                <hr/>



            </div>

            <div className="home__animation">
                <div className="home__animation-circle"></div>
                <div className="home__animation-circle"></div>
            </div>

        </div>



    )
}
