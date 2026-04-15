const jwt = require("jsonwebtoken");

const validateJWT = (token, secret) => {
  try {
    jwt.verify(token, secret);
    console.log("✔ JWT is valid");
  } catch (err) {
    console.log("✖ Invalid JWT");
  }
};

const checkSecurityHeaders = (headers) => {
  const requiredHeaders = [
    "x-frame-options",
    "x-content-type-options",
    "content-security-policy"
  ];

  requiredHeaders.forEach((h) => {
    if (headers[h]) {
      console.log(`✔ ${h} present`);
    } else {
      console.log(`✖ Missing ${h}`);
    }
  });
};

module.exports = { validateJWT, checkSecurityHeaders };
