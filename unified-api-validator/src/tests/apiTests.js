const { makeRequest } = require("../utils/requestHelper");
const { validateStatus } = require("../validators/responseValidator");
const { validateSchema } = require("../validators/schemaValidator");
const { checkSecurityHeaders } = require("../validators/securityValidator");

(async () => {
  const url = "https://jsonplaceholder.typicode.com/posts/1";

  const response = await makeRequest("GET", url);

  console.log("\n--- Running API Tests ---\n");

  // Status Check
  validateStatus(response, 200);

  // Schema Check
  const schema = {
    type: "object",
    properties: {
      userId: { type: "number" },
      id: { type: "number" },
      title: { type: "string" },
      body: { type: "string" }
    },
    required: ["userId", "id", "title", "body"]
  };

  validateSchema(schema, response.data);

  // Security Headers Check
  checkSecurityHeaders(response.headers);
})();
