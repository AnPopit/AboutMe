const express = require('express');
const path = require('path');
const app = express();

const distPath = path.join(__dirname, '..', 'client', 'dist');

app.use(express.static(distPath));

app.get(/^\/.*/, (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});