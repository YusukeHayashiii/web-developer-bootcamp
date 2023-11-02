const express = require('express');
const app = express();

app.get('/home', (req, res) => {
    res.send('Hello Express');
});

app.get('/cats', (req, res) => {
    res.send('<h1>猫のページ</h1>');
});

app.get('/r/:make', (req, res) => {
    const { make } = req.params;
    res.send(`<h1>${make}のページ</h1>`);
})

app.use((req, res, next) => {
    res.status(404).send('<h1>ページが見つかりません</h1>');
});

app.listen(3000, () => {
    console.log('リクエストをポート3000で待受中...')
});