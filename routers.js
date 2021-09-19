const express = require('express');
const router = express.Router();

// GET
router.get('/', (req, res) => {
    res.send('Hello World');
});

router.get('/port', (req, res) => {
    res.send(`${port}`);
});

// POST
router.post('/users', (req, res) => {
    res.send('User created');
});

// PUT
router.put('/users', (req, res) => {
    res.send('User updated');
});

// DELETE
router.delete('/users', (req, res) => {
    res.send('User deleted');
});

// HANDLE ROUTE WITH PARAMETER
router.get('/users/:id', (req, res) => {
    const id = req.params.id;

    res.send(`id: ${id}`);
});

// HANDLE ROUTE WITH OPTIONAL PARAMETER 
router.get('/profile/:id?', (req, res) => {
    const id = req.params.id;

    if (id) {
        res.send(`id: ${id}`);
    } else {
        res.send(`id is empty`);
    }
});

// HANDLE ROUTE WITH REQUEST
router.post('/address/add', (req, res) => {
    const id = req.query.id;
    const address = req.query.address;

    const results = {
        id: id,
        address: address
    };

    res.send(results);
});

module.exports = router;