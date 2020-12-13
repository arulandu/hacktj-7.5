const mongoose = require('mongoose')

const ProjectIdeaSchema = mongoose.Schema({
    name: {
        type: String,
        default: "",
        required: true
    },
    description: {
        type: String,
        default: "",
        required: true
    },
    likeCount: {
        type: Number,
        default: 0,
        required: false
    },
    workingMemberIds: {
        type: Array,
        default: [],
        required: false
    },
    completedMemberIds: {
        type: Array,
        default: [],
        required: false
    },
    topics: {
        type: Array,
        default: [],
        required: false
    }
})

module.exports = mongoose.model('project-ideas', ProjectIdeaSchema)