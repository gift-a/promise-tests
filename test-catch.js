(function() {
  const promise = new Promise((resolve, reject) => resolve(100));
  promise
    .then(function(value) {
      console.log("then =>" + value);
    })
    .then(() => {
      return 200;
    })
    .then(function(value) {
      console.log("then =>" + value);
      return 300;
    })
    .then(function(value) {
      console.log("then =>" + value);
      throw "Я иду в catch";
    })
    .then(null, function(value) {
      console.log("rejected =>" + value);
      return 500;
    })
    .then(function(value) {
      console.log("then =>" + value);
      return 600;
    })
    .then(function(value) {
      console.log("then =>" + value);
      return 700;
    });
})();
