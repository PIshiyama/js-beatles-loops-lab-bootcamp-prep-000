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
  facts = ["He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"];
  var exc = [];
  while (i < facts.length) {
    exc.push(facts[i] + "!!!");
  }
  
  return exc;
}