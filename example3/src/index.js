function* generator() {
  const orderList = [];
  while(true) {
    orderList.push(yield);
    console.log('orderList', orderList);
  }
}

function getRandomTime() {
  return Math.random() * 1000;
}

const iter = generator();
const list = [
  'a', 'b', 'c', 'd', 'e'
]
const promiseList = list.map(c => new Promise(resolve => {
  setTimeout(() => {
    resolve(c)
  }, getRandomTime())
}))

iter.next();

promiseList.forEach(p => p.then(c => iter.next(c)))
