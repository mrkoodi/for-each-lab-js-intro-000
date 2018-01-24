function iterativeLog(array) {
  array.forEach((index,element) => {
    console.log(`${index}: ${element}`);
  });

}

function iterate(callback) {
  var array =  [ "koodi" ];
  array.forEach(callback);
  return array;
}

function doToArray (array, callback) {
  return array.forEach(callback);
}
