const express = require( 'express');
const TaskRouter = express.Router();
const {TaskController} = require( '../controller/taskController' );

TaskRouter

    .get ('/tasks', TaskController.allTasks)

    .get ('/tasks/:_id', TaskController.seeTask)

    .post('/tasks', TaskController.createTask)

    .put('/tasks/:_id', TaskController.updateTask)

    .delete ('/tasks/:_id', TaskController.removeTask)



    module.exports = {
        TaskRouter
    };
    