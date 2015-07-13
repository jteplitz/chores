(function(){
  "use strict";

  var mongoose = require("mongoose"),
      Schema   = mongoose.Schema,
      ObjectId = Schema.Types.ObjectId;

  var Chore = new Schema({
    name: String,
    recurring: Boolean,
    frequency: Number,
    completed: Boolean,
    completedAt: Number,
    _id: ObjectId
  });

  var User = new Schema({
    email: String,
    name: String,
    picture: String,
    chores: [Chore]
  });

  exports.Chore = mongoose.model("Chore", Chore);
  exports.User = mongoose.model("User", User);
}());
