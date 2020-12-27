import React from 'react';

export default function Projects() {
    const contacts = 'Контактные_данные';

    function stringToArray($str) {
        return $str.split('')
    }

    return (
        <div className="contacts">

            <div className="contacts__title">

                <h1 className="main-children-wrapper">
                    {stringToArray(contacts).map((char, index) => <span key={index} className="contacts__title-char contacts__title-anim main-title">{char}</span>)}
                </h1>

                <hr/>

                <div className="contacts__title-description">
                    <p>
                        Меня интересуют возможности фриланса - особенно необычные и амбициозные проекты. Однако, если у Вас есть другой запрос или вопрос, не стесняйтесь обращаться ко мне, используя нижеприведенную форму.
                    </p>
                </div>

                <form className="contacts__title-form" action="">
                    <input type="text" placeholder="Имя" id="name"/>
                    <input type="email" placeholder="Email" id="email"/>
                    <input type="text" placeholder="Тема" id="subject"/>
                    <textarea name="" id="" cols="30" rows="5" placeholder="Сообщение" id="message"></textarea>
                    <input type="submit" value="Отправить" id="submit" className="main-btn"/>
                </form>

            </div>

            <div className="home__animation">
                <div className="home__animation-circle"></div>
                <div className="home__animation-circle"></div>
            </div>

        </div>



    )
}
