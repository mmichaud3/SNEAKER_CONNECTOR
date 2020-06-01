const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  favoriteSneaker: {
    type: String,
  },
  location: {
    type: String,
  },
  bio: {
    type: String,
  },
  sneaker: [
    {
      brand: {
        type: String,
        required: true,
      },
      model: {
        type: String,
        required: true,
      },
      size: {
        type: String,
        required: true,
      },
      condition: {
        type: String,
        required: true,
      },
      tradeAvailable: {
        type: Boolean,
        default: false,
      },
      description: {
        type: String,
      },
    },
  ],

  social: {
    youtube: {
      type: String,
    },
    twitter: {
      type: String,
    },
    facebook: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    instagram: {
      type: String,
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
