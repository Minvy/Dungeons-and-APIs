module.exports = (app) => {
    app.get('/menu', (req, res) => {
        res.send('[[Menu')
    })

    console.log('[Menu loaded')
}


