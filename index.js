var array = []

function theBeatlesPlay(musicians,instruments) {
  for (let i=0; i<musicians.length ; i=i+1) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array
}


function johnLennonFacts(facts) {
  let n = 0;
  while (n<facts.length){
    facts[n]=facts[n]+"!!!"
    n=n+1
  }
  return facts
}

function iLoveTheBeatles(num) {
  var array2=[]
  do {
    array2.push(`I love the Beatles!`)
    if (num<15) {
      num=num+1
  }
  } while (num<15)
  return array2
}
