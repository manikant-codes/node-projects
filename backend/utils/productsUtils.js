const convertFieldToArray = (fieldValue) => {
  if (!fieldValue) {
    fieldValue = [];
  } else if (fieldValue && !Array.isArray(fieldValue)) {
    fieldValue = [fieldValue];
  }
  return fieldValue;
};

module.exports = { convertFieldToArray };
