function iterativeLog(array) {
  array.forEach(callback);

}

function iterate(callback) {
  var array =  [ "koodi" ];
  array.forEach(callback);
  return array;
}

function doToArray (array, callback) {
  return array.forEach(callback);
}
