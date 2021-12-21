const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true){
      resolve('Hey');
    } else {
      reject("Whoops!");
    }
  })
}

somethingWillHappen()
  .then(response => console.log(response))
  .catch(err => console.error(err));
console.log("hola")

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if(true){
      setTimeout(function(){
        resolve("Hola mundo")
      }, 3000)
    } else {
      const err = new Error('Woops!')
      reject(err)
    }
  })
}

somethingWillHappen2()
  .then(response => console.log(response))
  .catch(err => console.error(err))
console.log("consola")

Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then(response => console.log("Resultados:", response))
  .catch(err => console.error(err))