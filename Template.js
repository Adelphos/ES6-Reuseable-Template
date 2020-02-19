function Template(cb) {
  return function(data) {
    const dataKeys = [];
    const dataVals = [];
    for (let key in data) {
      dataKeys.push(key);
      dataVals.push(data[key]);
    }
    const func = new Function(...dataKeys, 'return (' + cb + ')();');
    return func(...dataVals);
  }
}
