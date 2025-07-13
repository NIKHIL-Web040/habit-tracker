const express = require('express');
const router = express.Router();
const Habit = require('../../models/habit');

// CREATING a new habit
router.post('/', async (req, res) => {
  const { userId, title, description, frequency, reminderTime, goal, question } = req.body;

  try {
    const newHabit = new Habit({
      userId,
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
router.get('/:userId', async (req, res) => {
  const { userId } = req.params;
  console.log('Fetching habits for userId:', userId); // helpful debug log

  try {
    if (!userId) {
      return res.status(400).json({ message: 'User ID is required' });
    }

    const habits = await Habit.find({ userId });

    res.status(200).json(habits);
  } catch (err) {
    console.error('Error fetching habits:', err);
    res.status(500).json({ message: 'Server error while fetching habits' });
  }
});


// UPDATING habit by ID (progress, title, etc.)
// Update habit
router.put('/:habitId', async (req, res) => {
  try {
    const updatedHabit = await Habit.findByIdAndUpdate(
      req.params.habitId,
      req.body,
      { new: true } // <- this is important to return the updated document
    );

    if (!updatedHabit) {
      return res.status(404).json({ message: 'Habit not found' });
    }

    res.status(200).json({ message: 'Habit updated', habit: updatedHabit });
  } catch (err) {
    console.error('Error updating habit:', err);
    res.status(500).json({ message: 'Server error while updating habit' });
  }
});


// DELETING habit by ID
router.delete('/:habitId', async (req, res) => {
  try {
    const deletedHabit = await Habit.findByIdAndDelete(req.params.habitId);
    if (!deletedHabit) {
      return res.status(404).json({ message: 'Habit not found' });
    }
    res.status(200).json({ message: 'Habit deleted successfully' });
  } catch (err) {
    console.error('Error deleting habit:', err);
    res.status(500).json({ message: 'Server error while deleting habit' });
  }
});

module.exports = router;
