const mongoose = require('mongoose');
const Folder = require('./folderModel')


const fileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  path: {
    type: String,
  },
  img:{
    type: String,
  },
  folder:{
    type: mongoose.Schema.ObjectId,
      ref: "Folder",
  },
  dateCreated: {
    type: Date,
    required: true,
    default: Date.now
  },
  date: {
    type: Date,
    required: true,
  },

});

fileSchema.pre("save", async function (next) {
  
  this.path = this._id  + this.path
  this.img= this._id + this.img

  console.log(this.path)
  next();
});


const File = mongoose.model('File', fileSchema);

module.exports = File;
