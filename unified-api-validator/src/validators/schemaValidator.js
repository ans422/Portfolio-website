const Ajv = require("ajv");
const ajv = new Ajv();

const validateSchema = (schema, data) => {
  const validate = ajv.compile(schema);
  const valid = validate(data);

  if (!valid) {
    console.log("Schema Errors:", validate.errors);
  } else {
    console.log("✔ Schema Valid");
  }
};

module.exports = { validateSchema };
