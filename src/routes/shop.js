module.exports = (app) => {
    app.get('/shop', (req, res) => {
        res.send('[[Shop')
    })

    console.log('[Shop loaded')
}