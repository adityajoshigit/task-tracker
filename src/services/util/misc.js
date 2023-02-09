const getOptions = function(start, end, endInclusive, stepBy) {
  let ops = [];
  for (let index = start; endInclusive ? (index <= end) : index < end; index+=stepBy) {
    ops.push(index);
  }
  return ops;
};
const getCurrentInstant = function () {
  const thisMoment = new Date();
  return [thisMoment.getHours(), thisMoment.getMinutes(), thisMoment.getSeconds()];
};
const getNextInstant = function ([hh, mm]) {
  return [(hh === 23) ? 23 : (hh), (mm === 59) ? 0 : (mm + 1)];
};
export {
  getOptions, 
  getCurrentInstant, 
  getNextInstant,
};