// Entry point - orchestrates full validation run
const { makeRequest } = require("./utils/requestHelper");
const { validateStatus } = require("./validators/responseValidator");
const { validateSchema } = require("./validators/schemaValidator");
const { checkSecurityHeaders } = require("./validators/securityValidator");

(async () => {
  console.log("🚀 Unified API Validator - Starting...\n");
  const url = "https://jsonplaceholder.typicode.com/posts/1";
  const response = await makeRequest("GET", url);

  validateStatus(response, 200);

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
  checkSecurityHeaders(response.headers);

  console.log("\n✅ Validation Complete.");
})();
