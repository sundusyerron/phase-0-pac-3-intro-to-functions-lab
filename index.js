function shout(string) {
    return "hello".toUpperCase()
 }
 
 function whisper(string) {
    return "HELLO".toLowerCase();
 }
 
 function logShout(string) {
    console.log(string.toUpperCase());
 }
 
 logShout('hello');
 
 
 function logWhisper(string) {
   console.log(string.toLowerCase());
 }
 
 logWhisper('HELLO');
 
 function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
       return "I can\'t hear you!"
    } else if (string === string.toUpperCase()) {
       return  "YES INDEED!"
    } else if (string === "Let\'s have dinner together!") {
       return "I would love to!"
    }
 }


    
