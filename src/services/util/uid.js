const getUID = function (seed) {
  seed = seed || (new Date().getMilliseconds());
  return Math.floor(
    (new Date().getTime())
    / 
    Math.floor(
      Math.random() * 1000 * seed
    )
  );
}

export {
  getUID
};