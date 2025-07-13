const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  completedDates: {
    type: [Date],
    default: []
  },
  frequency: {
    type: String,
    enum: ['daily', 'weekly', 'custom'],
    default: 'daily'
  },
  streak: {
    type: Number,
    default: 0
  },
  lastCompleted: Date,
  goal: {
    type: Number,
    default: 1
  },
  progress: {
    type: Number,
    default: 0
  },
  reminderTime: String ,
  
  question: {
    type: String,
    default: "Status report, captain. Did we level up today?"
  }
});

module.exports = mongoose.model('Habit', habitSchema);
