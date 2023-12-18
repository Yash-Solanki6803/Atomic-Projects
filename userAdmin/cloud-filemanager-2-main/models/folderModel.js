const mongoose = require('mongoose');

const folderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  dateCreated: {
    type: Date,
    required: true,
    default: Date.now
  },
  desc: {
    type: String,
    required: true
  },
  img:{
    type: String,
    // required: true
  },
  files:  [
    {
      type: mongoose.Schema.ObjectId,
      ref: "File", 
    },
  ],
  date: {
    type: Date,
    required: true,
  },

});

folderSchema.pre("save", async function (next) {
  
  this.img = this._id + this.img
  // console.log(this.path)
  next();
});

const Folder = mongoose.model('Folder', folderSchema);

module.exports = Folder;
