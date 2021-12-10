//Create arrays for noun, verb, adverb, adjective, plural noun, body part.
//use  DOM query to return list of words based on class names.
//For each of the NodeLists returned, loop through the list and replace the text content with the matching type from the arrays you created

var nounArray = document.getElementsByClassName('noun');
var nouns = ['pirate', 'adventurer', 'hat', 'compass', 'parrot','villain','danger'];
for (var i = 0; i < nounArray.length; i++) {
var random = Math.floor(Math.random() * nouns.length);
  nounArray[i].textContent = nouns[random];
}


var adjectiveArray = document.getElementsByClassName('adjective');
var adjectives = ['sharp','glorious','elegant', 'unslightly','combative', 'smart' ];
for (var i = 0; i < adjectiveArray.length; i++) {
var random = Math.floor(Math.random() * adjectives.length);
  adjectiveArray[i].textContent = adjectives[random];
}

var verbArray = document.getElementsByClassName('verb');
var verbs = ['run','slide','jump', 'fight', 'kill', 'cut', 'bust'];
for (var i = 0; i < verbArray.length; i++) {
var random = Math.floor(Math.random() * verbs.length);
  verbArray[i].textContent = verbs[random];
 }

var adverbArray = document.getElementsByClassName('adverb');
var adverbs = ['fiercely', 'sharply','recklessly','ferociously','bravely','brutally'];
for (var i = 0; i < adverbArray.length; i++) {
var random = Math.floor(Math.random() * adverbs.length);
  adverbArray[i].textContent = adverbs[random];
 }

var pluralNounsArray = document.getElementsByClassName('plural-noun');
var pluralNouns = ['pirates', 'adventurers', 'hats', 'compasses','parrots', 'villains', 'dangers'];
for (var i = 0; i < pluralNounsArray.length; i++) {
var random = Math.floor(Math.random() * pluralNouns.length);
  pluralNounsArray[i].textContent = pluralNouns[random];
 }

var bodyPartsArray = document.getElementsByClassName('body-part');
var bodyParts = ['leg','hand','shoulder','head', 'toe','nose', 'elbow', 'eye'];
for (var i = 0; i < bodyPartsArray.length; i++) {
var random = Math.floor(Math.random() * bodyParts.length);
  bodyPartsArray[i].textContent = bodyParts[random];
 }

 