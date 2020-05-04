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

iter.next();

list.forEach(c => {
 setTimeout(() => {
   iter.next(c)
 }, getRandomTime())
})



