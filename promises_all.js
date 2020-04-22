const taskOne = new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve('finished 1')
    }, 1000);

   console.log('taskOne called')
})

const taskTwo = new Promise((resolve, reject) => {
   resolve('finished 2')
})

const taskThree = new Promise((resolve, reject) => {
   resolve('finished 3')
})

Promise.all([
   taskOne,
   taskTwo,
   taskThree
]).then((messages) => {
   console.log(messages)
})

Promise.race([
   taskOne,
   taskTwo,
   taskThree
]).then((message) => {
   console.log(message)
})
