const axios = require("axios");

const makeRequest = async (method, url, headers = {}, data = {}) => {
  try {
    const response = await axios({
      method,
      url,
      headers,
      data
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

module.exports = { makeRequest };
