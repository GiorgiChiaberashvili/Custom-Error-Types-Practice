// Your code here
class ValidationError extends Error {
  constructor(message = 'Invalid input') {
    super(message)
    this.name = `ValidationError`

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ValidationError);
    };
  };
};
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = ValidationError;
} catch {
  module.exports = null;
}
