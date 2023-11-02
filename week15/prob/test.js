// Expressアプリケーション
const express = require('express')
const path = require('path')

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// 商品データのデータベース
const products = [
    { id: 1, name: 'Product 1', description: 'Description of Product 1', price: 19.99 },
    { id: 2, name: 'Product 2', description: 'Description of Product 2', price: 29.99 },
    { id: 3, name: 'Product 3', description: 'Description of Product 3', price: 39.99 }
]

// 問題1
app.get('/', (req, res) => {
    const message = "ようこそホームページへ"
    res.render('home', {message})
})

app.get('/greet', (req, res) => {
    // クエリパラメータでusernameを取得する
    const username = req.query.username
    const message = `${username}のメッセージ`
    res.render('home', {message})
})

// 問題2
app.get('/products/:productId', (req, res) => {
    const { productId } = req.params
    const intId = parseInt(productId)
    const product = products.filter(p => p.id === intId)[0]
    // const data = products[product]
    res.render('product', { ...product })

})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})
