const express = require('express');

const User = require('../models/User');

const Lesson = require('../models/Lesson');
const Activity = require('../models/Activity');

const router = express.Router();

router.post('/register', async (req, res) => {

    try {
        const user = await User.create(req.body);
    
        return res.send({user});
    }
    catch(err){
        return res.status(400).send({error: 'Registration failed'});
    }
});

// Lessons

// POST - /lessons - criação de um objeto
router.post('/lessons', async (req, res) => {

    try{
        console.log(req.body);

        const {
            id,
            name,
            course,
            activities,
            room,
        } = req.body;
        
        const lessonCreated = await Lesson.create({
            id,
            name,
            course,
            activities,
            room,
        });
        
        return res.send({lessonCreated});
    }
    catch(err){
        return res.status(400).send({error: 'Lesson creation failed'});
    }
});

// DELETE - /lessons/id - exclusão de um objeto
// router.delete('/lessons/:id', async (req, res) => {

//     try{
        
//     }

// });

// PUT - /lessons/id - atualização de todo objeto


// PATCH - /lessons/id - atualização de alguns atributos do projeto


// GET - /resource - recupera todos objetos
router.get('/lessons', async (req, res) => {

    try{

    }
    catch(err){

    }

});

// GET - /resource/id - recupera um obj pelo id


// GET - /resource/?atributo=valor - recuperação de um objeto por uma query string simples


// GET - /resource/?atributo=valor&atributo>=valor&etc - recuperação de um objeto por uma query string complexa



//Activity

module.exports = app => app.use('/auth', router);