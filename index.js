var array = []

function theBeatlesPlay(musicians,instruments) {
  for (let i=0; i<musicians.length ; i=i+1) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array
}

var newFacts=[]
let n = 0;
function johnLennonFacts(facts) {
  while (n<facts.length){
    newFacts.push(facts[n]+"!!!")
    n=n+1
  }
  return newFacts
}

function iLoveTheBeatles(num) {
  var array2=[]
  do {
    array2.push(`I love the Beatles`)
      if (num<15) {
    num=num+1
  }
  } while (num<15)

  return array2
}
