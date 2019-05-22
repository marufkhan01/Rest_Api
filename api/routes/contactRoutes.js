const express = require('express')
const router = express.Router()

// GET

router.get('/', (req, res, next) => {
    res.status(200).json({
        message:'Here have all contacts information'
    })
})

// POST

router.post('/', (req, res, next) => {

    const name = req.body.name
    const email = req.body.email
    console.log(name, email)

    res.status(201).json({
        message: 'this is post route',
        name,
        email
    })
})

router.get('/:id', (req, res, next) => {
    const id = req.params.id
    res.json({
        message :'single contact'
    })
})

router.put('/:id', (req, res, next) => {
    const id = req.params.id
    res.json({
        message :'this is put route'
    })
})

router.delete('/:id', (req, res, next) => {
    const id = req.params.id
    res.json({
        message :'this is delete route'
    })
})

module.exports = router