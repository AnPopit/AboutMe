import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [message, setMessage] = useState('Загрузка...');

    useEffect(() => {
        fetch('/api/hello')
            .then(res => res.json())
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

export default App;