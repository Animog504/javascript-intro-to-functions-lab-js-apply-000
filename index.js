function shout(string){
  return string.toUpperCase();
}
function whisper(string){
  return string.toLowerCase();
}
function logShout(string){
  return console.log();
}
function logWhisper(string){
  return console.log().toLowerCase();
}
function sayHiToGrandma(string){
  var response = "";//empty response variable
  
  if (string.toLowerCase() === string){
    response = "I can't hear you!";
  } // if she can't hear you she can't reply to anything.
  
  else if (string.toUpperCase() === string){
    response = "YES INDEED!";
  }
  
  if (string.toLowerCase() === "i love you, grandma."){
    response = "I love you, too."; 
  } // if she can hear you she replies YES INDEED, additionall if string is "I love you, Grandma"
    // it will return "I love you too"
    
  return response;
}