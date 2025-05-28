function mergeObjects(obj1, obj2) {
    const result = {...obj1};
    for (let key in obj2) {
      if (obj2.hasOwnProperty(key)) {
        if (typeof obj2[key] === 'object' && obj2[key] !== null) {
          result[key] = mergeObjects(result[key] || {}, obj2[key]);
        } else {
          result[key] = obj2[key];
        }
      }
    }
    return result;
  }
  
  module.exports = mergeObjects;