function* generator() {
  const firstPlace = yield;
  const secondPlace = yield;
  const thirdPlace = yield;

  console.log(firstPlace, secondPlace, thirdPlace);
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



