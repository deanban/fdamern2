const keys = require("./mlab");

module.exports = {
  mongoURI: `mongodb://${keys.name}:${
    keys.pass
  }@ds253871.mlab.com:53871/recalls`,
  secretOrKey: keys.secret
};
