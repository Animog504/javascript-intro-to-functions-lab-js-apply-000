function shout(string){
  return string.toUpperCase();
}
function whisper(string){
  return string.toLowerCase();
}
function logShout(){
  console.log().toUpperCase();
}
function logWhisper(){
  console.log().toLowerCase();
}
function sayHiToGrandma(string){
  var response = "";//empty response variable
  if (string.toLowerCase() === "i love you, grandma."){
    response = "I love you, too."; 
  } // highest priority response. regardless of whisper/shout she will respond this way.
  if (string.toLowerCase() === string){
    response = "I can't hear you!";
  } // if she can't hear you she can't reply to anything.
  
  if (string.toUpperCase() === string){
    response = "YES INDEED!";
  }
  
  
    
  return response;
}