let a = 1;

const promise = function() {
  return new Promise((resolve, reject) => {
    if (false) reject();
    a = 2;
    resolve("ok");
  });
};
console.log(`middle ${a}`);
promise()
  .then(res => (a = 3))
  .then(res => console.log(`inner ${res}`))
  .catch(err => console.log(err));

console.log(`outer ${a}`);

// let a = 1;

// const promise = new Promise((resolve, reject) => {
//   if (false) reject();
//   a = 2;
//   resolve("ok");
// });
// console.log(`middle ${a}`);
// promise
//   .then(res => (a = 3))
//   .then(res => console.log(`inner ${res}`))
//   .catch(err => console.log(err));

// console.log(`outer ${a}`);

// new Promise(executor);

// new Promise(function(resolve, reject) {
//   reject(value);
// });

// let a = 2;

// const promise = new Promise((resolve, reject) => {
//   if (false) reject();
//   a = 5;
//   resolve("ok");
// });

// promise()
//   .then(
//     res => res + " here"
//   )
//   .then(
//     res => console.log(res)
//   )
//   .catch(
//     err => console.log(err)
//   )

//   console.log(a);

// somePromise().then(
//   function() {
//     throw new Error("oh noes");
//   },
//   function(err) {
//     // Ошибка? Какая ошибка? O_o
//   }
// );

// somePromise()
//   .then(function() {
//     throw new Error("oh noes");
//   })
//   .catch(function(err) {
//     // Ошибка поймана! :)
//   });

// somePromise()
//   .then(
//     function() {
//       return someOtherPromise();
//     },
//     function(err) {
//       // Обработка ошибки
//     }
//   );

// somePromise()
//   .then(function() {
//     return someOtherPromise();
//   })
//   .then(
//     null,
//     function(err) {
//     // Обработка ошибка
//   });

// somePromise().then(
//   function() {
//     throw new Error("oh noes");
//   },
//   function(err) {
//     // Ошибка? Какая ошибка? O_o
//   }
// );

// somePromise()
//   .then(function() {
//     throw new Error("oh noes");
//   })
//   .catch(function(err) {
//     // Ошибка поймана! :)
//   });

// somePromise().then(
//   function() {
//     throw new Error("oh noes");
//   },
//   function(err) {
//     // Ошибка? Какая ошибка? O_o
//   }
// );

// somePromise().then(
//   function() {
//     return someOtherPromise();
//   },
//   function(err) {
//     // Обработка ошибки
//   }
// );
