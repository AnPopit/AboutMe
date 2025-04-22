import React from "react";
import {Link} from "react-router-dom";

export const TwoPage = () => (
    <>
        <header>
            <div className="header">
                <Link to="/">На главную страницу</Link>
            </div>
        </header>
        <main>
            <h1>Анна Политова</h1>
            <h2>Краткая анкета</h2>
            <dl>
                <dt>Стек</dt>
                <dd>HTML, CSS, JS, TS, React, Redux, Webpack, Vite, Versel</dd>
                <dt>Библиотеки</dt>
                <dd>i18 next, yup, toastify</dd>
                <dt>Текущая книга</dt>
                <dd>Книги серии &apos;Вы не знаете JS&apos;</dd>
            </dl>
        </main>
    </>
);