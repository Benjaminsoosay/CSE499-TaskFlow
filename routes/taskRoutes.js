const express = require('express');
const router = express.Router();
const Task = require('../models/Task');
const authMiddleware = require('../middleware/authMiddleware');

// @route   POST /api/tasks
// @desc    Create a new task (Protected Route)
router.post('/', authMiddleware, async (req, res) => {
    try {
        const { title, description } = req.body;
        
        const newTask = new Task({
            title,
            description,
            user: req.user.id // comes from authMiddleware
        });

        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create task', error: error.message });
    }
});

// @route   GET /api/tasks
// @desc    Get all tasks for logged-in user (Protected Route)
router.get('/', authMiddleware, async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.user.id });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch tasks', error: error.message });
    }
});

module.exports = router;