function shout(string){
  return string.toUpperCase();
}
function whisper(string){
  return string.toLowerCase();
}
function logShout(){
  return console.log();
}
function logWhisper(){
  return console.log().toLowerCase();
}
function sayHiToGrandma(string){
  var response = "";
  if (string.toLowerCase() === string)
    response = "I can't hear you!";
  if (string.toUpperCase() === string)
    response = "YEES INDEED!";
  if (string.toLowerCase() = "i love you, grandma.")
    response = "I love you, too.";
  }
  return response;
}