function* generator() {
  while(true) {
    const time = yield;
    console.log(time);
  }
}

(function run() {
  const iter = generator();
  iter.next();
  setInterval(() => {
    iter.next(new Date());
  }, 1000)

}())

