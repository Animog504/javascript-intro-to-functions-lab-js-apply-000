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
  var response = "";//empty response variable
  
  if (whisper(string) === string){
    response = "I can't hear you!";
  } // if she can't hear you she can't reply to anything.
  
  else if (shout(string) === string){
    response = "YES INDEED!";
  }
  
  if (whisper(string) == "i love you, grandma."){
      response = "I love you, too."; 
  } // if she can hear you she replies YES INDEED, additionall if string is "I love you, Grandma"
    // it will return "I love you too"
    
  return response;
}