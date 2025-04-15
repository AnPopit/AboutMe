const express = require('express');
const cors = require('cors'); // 👈 добавили

const app = express();
const PORT = 3001;

app.use(cors()); // 👈 разрешаем все кросс-доменные запросы
app.use(express.json());

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Привет от сервера!' });
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});