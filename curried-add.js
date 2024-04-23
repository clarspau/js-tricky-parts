function curriedAdd(total) {
     // if there's no initial value, return 0
     if (total === undefined) {
          return 0;
     }

     return function addNum(num) {
          if (num === undefined) {
               return total;
          }

          total = total + num;
          // return the function so we can keep adding numbers
          return addNum;
     };
}

module.exports = { curriedAdd };
