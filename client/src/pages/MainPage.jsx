import { Link } from 'react-router-dom';
import React from "react";

export const MainPage = () => (
    <>
    <header>
        <nav>
            <ul>
                <li>
                    <Link to="/one">Об авторе</Link>
                </li>
                <li>
                    <Link to="/two">Анкета</Link>
                </li>
                <li>
                    <Link to="/three">Контур Demo</Link>
                </li>
            </ul>
        </nav>
    </header>
        <main>
            <section className='main'>
                <p>Это тестовый проект для отработки сборки webpack, базовой настройки сервера и React
        Router.
        </p>
    </section>

</main>
    </>
    )
;