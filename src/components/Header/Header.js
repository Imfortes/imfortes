import React from 'react';
import {Link, NavLink} from 'react-router-dom'

import home from './images/home.svg'
import about from './images/about.svg'
import skills from './images/skills.svg'
import projects from './images/projects.svg'
import contacts from './images/contact.svg'

export default function Header() {

    return (
        <header className="header">
            <nav className="header__navbar">

                <div className="header__navbar-logo">
                    <h1>I</h1> <span>Imfortes</span>
                </div>

                <ul className="header__navbar-list">
                    <li>
                        <NavLink to='/' activeClassName="active" exact>
                            <span>Главная</span>
                            <img src={home} alt=""/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' activeClassName="active" eventKey="/">
                            <span>Обо мне</span>
                            <img src={about} alt=""/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/skills' activeClassName="active" eventKey="/">
                            <span>Навыки</span>
                            <img src={skills} alt=""/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/projects' activeClassName="active" eventKey="/">
                            <span>Портфолио</span>
                            <img src={projects} alt=""/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/contacts' activeClassName="active" eventKey="/">
                            <span>Контакты</span>
                            <img src={contacts} alt=""/>
                        </NavLink>
                    </li>
                </ul>

                <ul className="header__navbar-socials">
                    <li>
                        <Link to='/' >
                            <span>VK</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/' >
                            <span>GitHub</span>
                        </Link>
                    </li>
                </ul>

                <div className="header__navbar-mode">
                    <input type="checkbox" id="mode"/>
                    <label htmlFor="mode" className="toggle"><span></span></label>
                </div>

            </nav>
        </header>
    )
}
