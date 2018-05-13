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
  if (string.toLowerCase() === string){
    return "I can't hear you!";
  }
  if (string.toUpperCase() === string){
    return "YES INDEED!";
  }
}