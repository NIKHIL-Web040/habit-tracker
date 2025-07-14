const express = require('express');
const router = express.Router();
const Habit = require('../../models/habit');
const authMiddleware = require('../middleware/auth');


// CREATING a new habit
router.post('/', authMiddleware ,async (req, res) => {
  const { userId , title, description, frequency, reminderTime, goal, question } = req.body;

  try {
    const newHabit = new Habit({
      userId: req.user.userId,
      title,
      description,
      frequency,
      reminderTime,
      goal,
      question
    });

    await newHabit.save();
    res.status(201).json({ message: 'Habit created successfully', habit: newHabit });
  } catch (err) {
    console.error('Error creating habit:', err);
    res.status(500).json({ message: 'Server error while creating habit' });
  }
});

// READING all habits for a user
router.get('/:userId', authMiddleware,async (req, res) => {

  const paramId = req.params.userId?.trim();
  const decodedId = req.user.userId?.toString().trim();

  if (decodedId !== paramId) {
    return res.status(403).json({ message: 'Access denied. You are not authorized to view these habits.' });
  }
  try {
    const habits = await Habit.find({ userId: decodedId });

    res.status(200).json(habits);
  } catch (err) {
    console.error('Error fetching habits:', err);
    res.status(500).json({ message: 'Server error while fetching habits' });
  }
});

// UPDATING habit by ID (progress, title, etc.)
// Update habit
// PUT /api/habits/:habitId
router.put('/:habitId', authMiddleware, async (req, res) => {
  const habitId = req.params.habitId;
  const userIdFromToken = req.user.userId;

  try {
    const habit = await Habit.findOne({ _id: habitId, userId: userIdFromToken });
    if (!habit) {
      return res.status(403).json({ message: 'Access denied. You are not allowed to update this habit.' });
    }

    const updatedFields = req.body;
    const updatedHabit = await Habit.findByIdAndUpdate(habitId, updatedFields, {
      new: true, 
    });

    res.status(200).json({
      message: 'Habit updated successfully',
      habit: updatedHabit,
    });
  } catch (err) {
    console.error('Error updating habit:', err);
    res.status(500).json({ message: 'Server error while updating habit' });
  }
});



// DELETING habit by ID
router.delete('/:habitId', authMiddleware, async (req, res) => {
  const habitId = req.params.habitId;
  const userIdFromToken = req.user.userId;

  try {
    const habit = await Habit.findOne({ _id: habitId, userId: userIdFromToken });
    if (!habit) {
      return res.status(403).json({ message: 'Access denied. You are not allowed to delete this habit.' });
    }

    await Habit.findByIdAndDelete(habitId);

    res.status(200).json({ message: 'Habit deleted successfully' });
  } catch (err) {
    console.error('Error deleting habit:', err);
    res.status(500).json({ message: 'Server error while deleting habit' });
  }
});


module.exports = router;
