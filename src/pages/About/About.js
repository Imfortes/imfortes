import React from 'react';


export default function About() {
    const aboutMe = 'Обо_Мне';

    function stringToArray($str) {
        return $str.split('')
    }

    return (
        <div className="about">

            <div className="about__title">

                    <h1 >
                        {stringToArray(aboutMe).map((char, index) => <span key={index} className="about__title-char about__title-anim main-title">{char}</span>)}
                    </h1>

                <hr/>

                <div className="about__title-description">
                    <p>
                        Профессионально занимаюсь разработкой с конца 2019 года.
                    </p>
                    <p>
                        Хорошо организован, люблю решать сложные и интересные задачи, а так же уделять внимание деталям. Поклонник экстремальных видов спорта, активного отдыха, музыки и в последнее время литературы.
                    </p>
                    <p>
                        Интересуюсь всем фронтенд-спектром и заинтересован в работе над амбициозными проектами с позитивными людьми.
                    </p>
                </div>

            </div>



            <div className="home__animation">
                <div className="home__animation-circle"></div>
                <div className="home__animation-circle"></div>
            </div>

        </div>
    )
}
