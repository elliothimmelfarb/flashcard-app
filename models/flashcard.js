'use strict';

const mongoose = require('mongoose');

let Flashcard = mongoose.model('Flashcard', {
  question: String,
  answer: String,
  category: String
});

module.exports = Flashcard;
