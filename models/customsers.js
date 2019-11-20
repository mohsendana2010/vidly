const Joi = require('joi');
const mongoose = require('mongoose');


const Customer =  mongoose.model('Customer', new mongoose.Schema({
    name:{
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255,
    },
    isGold: {
        type: Boolean,
        default: false,
    },
    phone:{
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50,
    },
  }));