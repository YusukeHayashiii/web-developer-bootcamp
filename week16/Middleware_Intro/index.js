const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('tiny'));

app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
});

app.use('/dogs', (req, res, next) => {
    console.log('いぬーーー！！');
    next();
});

const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if (password === 'supersecret') {
        return next();
    }
    res.send('パスワードが必要です');
}

// app.use((req, res, next) => {
//     console.log('初めてのミドルウェア！！！');
//     return next();
//     console.log('初めてのミドルウェアのnextのあとの処理！！！');
// });
// app.use((req, res, next) => {
//     console.log('2個目のミドルウェア！！！');
//     return next();
// });
// app.use((req, res, next) => {
//     console.log('3個目のミドルウェア！！！');
//     return next();
// });

app.get('/', (req, res) => {
    console.log(`リクエスト時刻: ${req.requestTime}`);
    res.send('ホームページ！！');
});

app.get('/dogs', (req, res) => {
    console.log(`リクエスト時刻: ${req.requestTime}`);
    res.send('わんわん');
});

app.get('/secret', verifyPassword, (req, res) => {
    res.send('ここは秘密のページです！！誰にも言わないで！！');
});

app.use((req, res) => {
    res.status(404).send('ページが見つかりません');
});


app.listen(3000, () => {
    console.log('locahost:3000で待受中...');
});