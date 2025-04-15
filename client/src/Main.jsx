import { useEffect, useState } from 'react';
import React from "react";

function Main() {
    const [message, setMessage] = useState('Загрузка...');

    useEffect(() => {
        fetch('/api/hello')
            .then(res => {
                console.log(res)
                return res.json()
            })
            .then(data => setMessage(data.message))
            .catch(err => setMessage('Ошибка получения данных'));
    }, []);

    return (
        <div className="App">
            <h1>Фронт + Бэк</h1>
            <p>{message}</p>
        </div>
    );
}

export default Main;