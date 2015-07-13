var schemas = require("../app/schemas");

module.exports = function(req, res, next){
  var body = JSON.parse(req.rawBody);
  var set = {
    "chores.$.completed": body.completed,
    "chores.$.completedAt": new Date().getTime()
  };
  schemas.User.findOneAndUpdate(
    {"chores._id": req.params.id}, {$set: set}, function(err, user){
    if (err){
      res.json(err, 500)
    } else {
      res.json({
        _err: 0,
        user: user
      });
    }
  });
}
