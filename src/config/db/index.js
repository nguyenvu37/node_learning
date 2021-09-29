const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/education_dev');
    console.log('Connect successfully!!');
  } catch (error) {
    console.log(`error`, error);
  }
}

module.exports = { connect };
