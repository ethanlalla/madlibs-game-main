//Create arrays for noun, verb, adverb, adjective, plural noun, body part.
//use  DOM query to return list of words based on class names.
//For each of the NodeLists returned, loop through the list and replace the text content with the matching type from the arrays you created

var nounArray = document.getElementsByClassName('noun');
var nouns = ['pirate', 'adventurer', 'hat', 'compass', 'parrot', 'villain', 'danger'];
for (var i = 0; i < nounArray.length; i++) {
  var random = Math.floor(Math.random() * nouns.length);
  nounArray[i].textContent = nouns[random];
}


var adjectiveArray = document.getElementsByClassName('adjective');
var adjectives = ['sharp', 'glorious', 'elegant', 'unslightly', 'combative', 'smart'];
for (var i = 0; i < adjectiveArray.length; i++) {
  var random = Math.floor(Math.random() * adjectives.length);
  adjectiveArray[i].textContent = adjectives[random];
}

var verbArray = document.getElementsByClassName('verb');
var verbs = ['run', 'slide', 'jump', 'fight', 'kill', 'cut', 'bust'];
for (var i = 0; i < verbArray.length; i++) {
  var random = Math.floor(Math.random() * verbs.length);
  verbArray[i].textContent = verbs[random];
}

var adverbArray = document.getElementsByClassName('adverb');
var adverbs = ['fiercely', 'sharply', 'recklessly', 'ferociously', 'bravely', 'brutally'];
for (var i = 0; i < adverbArray.length; i++) {
  var random = Math.floor(Math.random() * adverbs.length);
  adverbArray[i].textContent = adverbs[random];
}

var pluralNounsArray = document.getElementsByClassName('plural-noun');
var pluralNouns = ['pirates', 'adventurers', 'hats', 'compasses', 'parrots', 'villains', 'dangers'];
for (var i = 0; i < pluralNounsArray.length; i++) {
  var random = Math.floor(Math.random() * pluralNouns.length);
  pluralNounsArray[i].textContent = pluralNouns[random];
}

var bodyPartsArray = document.getElementsByClassName('body-part');
var bodyParts = ['leg', 'hand', 'shoulder', 'head', 'toe', 'nose', 'elbow', 'eye'];
for (var i = 0; i < bodyPartsArray.length; i++) {
  var random = Math.floor(Math.random() * bodyParts.length);
  bodyPartsArray[i].textContent = bodyParts[random];
}


//write var array for all arrays for function to pull arrays.
var allArrays = ['nounArray', 'adjectiveArray', 'verbArray', 'adverbArray', 'pluralNouns', 'bodyPartsArray'];


var getWord = function(type) {
  random = Math.floor(Math.random() * nounArray.length);
  if (type == "noun") {
    return nouns[random];
  } else if (type == "adjective") {
    return adjectives[random];
  } else if (type == "verb") {
    return verbs[random];
  } else if (type == "adverb") {
    return adverbs[random];
  } else if (type == "pluralnoun") {
    return pluralNouns[random];
  } else if (type == "bodyparts") {
    return bodyParts[random];
  }
}
//Part 2: Write a function which allows the substitution of words based on a random selection from an array. The function should be called 'getWord' and its parameter should be 'type'. Based on the type passed (that matches one of the six word classes), a random word should be returned from the appropriate array of words. Use this function to update the NodeLists looped through in Part 1