const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

let todoItems = [
    { id: 1, text: 'タスク1' ,description: 'タスク1の説明'},
    { id: 2, text: 'タスク2' ,description: 'タスク2の説明'},
    { id: 3, text: 'タスク3' ,description: 'タスク3の説明'}
];


app.get('/', (req, res) => {
    res.send(`<h1>ホームページ</h1>`)
})

app.get('/todos', (req, res) => {
    res.render('todos', { todoItems });
});

// 問題1(todos/newを追加)
app.get('/todos/new', (req, res) => {
    res.render('new');
});

// 問題2(新規タスクを追加して、一覧に表示させる)
app.post('/todos', (req, res) => {
    const { name, content } = req.body;
    todoItems.push({ text: name, description: content, id: todoItems.length + 1});
    console.log(req.body);
    res.redirect('/todos');
});


app.get('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = todoItems.find((todo) => todo.id === id);
    res.render('todo', { item });
});


app.get('/todos/:id/edit', (req, res) => {
    const id = parseInt(req.params.id)
    const item = todoItems.find((todo) => todo.id === id)
    res.render('edit', { item })
});

// 問題3(タスクを編集する)
app.put('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = todoItems.find((todo) => todo.id === id);
    console.log(req.body);
    console.log(item);
    item.text = req.body.name;
    item.description = req.body.content;
    res.redirect('/todos');
});


app.delete('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    todoItems = todoItems.filter((todo) => todo.id !== id);
    res.redirect('/todos');
});


app.listen(3000, () => {
    console.log("ポート3000で待受中");
});