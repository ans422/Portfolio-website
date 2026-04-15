const green = (msg) => `\x1b[32m${msg}\x1b[0m`;
const red   = (msg) => `\x1b[31m${msg}\x1b[0m`;

const validateStatus = (response, expectedStatus) => {
  if (response.status === expectedStatus) {
    console.log(green(`✔ Status OK: ${response.status}`));
  } else {
    console.log(red(`✖ Status Failed: ${response.status}`));
  }
};

module.exports = { validateStatus };
