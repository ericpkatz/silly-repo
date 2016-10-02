var db = require('./_db');

var User = require('./user');
var Group = require('./group');

module.exports = {
  syncAndSeed: function(){
    return db.sync({ force: true })
      .then(function(){
        return Promise.all([
            Group.create({ name: 'admin' }),
            Group.create({ name: 'HR' }),
            Group.create({ name: 'engineering' }),
            User.create({ username: 'moe', password: 'foo' }),
            User.create({ username: 'larry', password: 'bar' }),
        ]);
      });
  },
  models: {
    User: User,
    Group: Group
  }
};
