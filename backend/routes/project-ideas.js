const express = require('express');
const router = express.Router();
const ProjectIdea = require('../models/ProjectIdea')
const authenticateToken = require('../lib/authenticateToken')

router.post('/create', authenticateToken, async (req, res) => {
    const projectIdea = new ProjectIdea({
        name: req.body.name,
        description: req.body.description,
        topics: req.body.topics
    })

    try {
        const findIdeaWithName = await ProjectIdea.findOne({
            'name': req.body.name
        })

        if(findIdeaWithName){
            throw Error('project idea name already found')
        }

        const savedProjectIdea = await projectIdea.save()
        res.json({
            savedProjectIdea: savedProjectIdea,
            success: true
        })

    } catch (er) {
        console.log(er);
        res.json({
            message: er.toString(),
            success: false
        })
    }
})

router.post('/find', authenticateToken, async (req, res) => {
    let topics = req.body.topics;
    try {
        if(!topics){
            throw Error("no filters specified")
        }

        const ideas = await ProjectIdea.find({
            topics: { $all: topics }
        })

        res.json({
            ideas: ideas,
            success: true
        })
    } catch (er) {
        console.log(er);
        res.json({
            message: er.toString(),
            success: false
        })
    }
})


module.exports = router