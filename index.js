// add solution here

function theBeatlesPlay(artist, instrument) {
  var Beatles = [];
  for (var i = 0; i < artist.length; i++) {
    Beatles.push(artist[i] + " plays " + instrument[i]);
  }
  return Beatles;
}

function johnLennonFacts(facts) {
  var i = 0;
  facts = [];
  var exc = [];
  while (i < facts.length) {
    exc.push(facts[i] + "!!!");
    i++;
  }
  
  return exc;
}