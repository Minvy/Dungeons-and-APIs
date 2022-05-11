module.exports = (app) => {
    app.get('/zone', (req, res) => {
        res.send('[[Zenu')
    })

    console.log('[Zone loaded')
}