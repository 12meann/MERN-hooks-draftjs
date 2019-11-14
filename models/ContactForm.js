const mongoose = require("mongoose");

const contactFormSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  eventType: {
    type: String
  },
  fromDate: {
    type: String
  },
  toDate: {
    type: String
  },
  hoursNeeded: {
    type: String
  },
  message: {
    type: String,
    required: true
  },
  sentDate: {
    type: Date,
    default: new Date()
  }
});

module.exports = mongoose.model("ContactForm", contactFormSchema);
