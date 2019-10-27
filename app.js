const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateTrashTalk = require('./generate_trash_talk.js')
const app = express()
const port = 3000

// Register ExpressHandlebars instance-level helpers
const hbs = exphbs.create({ helpers: {} })

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// Ask Express to take the request body and parse it into JS object
app.use(bodyParser.urlencoded({ extended: true }))

// setting static files
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/', (req, res) => {
    console.log('req.body: ', req.body)
    target = req.body.target
    console.log('target', target)
    trashtalk = generateTrashTalk(target)
    console.log('trashtalk: ', trashtalk)
    res.render('index', {
        trashtalk: trashtalk,
        helpers: { [target]() { return 'checked' } }
    })
})

app.listen(port, () => {
    console.log(`Express is running on http://localhost:${port}`)
})
