const jwt = require('jsonwebtoken');

const secret = 'eyemobile';

const createToken = (payload) => {
  const jwtConfig = {
    expiresIn: '30m',
    algorithm: 'HS256',
  };

  const token = jwt.sign(payload, secret, jwtConfig);

  return token;
};

module.exports = createToken;