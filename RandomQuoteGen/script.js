$(document).ready(function(){
  
  function getQuote(){
    var quotes = ["Mi o sutete mo, myōri wa sutezu.", "With every death, comes honor. With honor, redemption.", "Cheers, love! The cavalry's here!", "	I'll be watching over you.", "We're all soldiers now.", "Justice will be done.", "One shot, one kill.", "It's a perfect day for some mayhem.", "Never stop fighting for what you believe in.", "Death walks among you.", "I play to win.", "I'm a one-man apocalypse.", "Everything can be hacked... and everyone.", "Build 'em up, Break 'em down.", "True self is without form.", "Come on, let's bring it together!", "Justice ain't gonna dispense itself.", "The true enemy of humanity is disorder.", "Together we are strong.", "Boo boo doo de doo."];
    var author = ["- Genji", "- Hanzo", "- Tracer", "- Mercy", "- Soldier 76", "- Reinhardt", "- Widowmaker", "- Junkrat", "- Ana", "- Reaper", "- D.Va", "- Roadhog", "- Sombra", "- Torbjörn", "- Zenyatta", "- Lúcio", "- McCree", "- Symmetra", "- Zarya", "- Bastion"];
    
    var randomNum = Math.floor(Math.random()*quotes.length);
    var randomQuote = quotes[randomNum];
    var randomAuthor = author[randomNum];
    
    $(".quote").text(randomQuote);
    $(".author").text(randomAuthor);    
  }
  
  $(".btn").on("click", function(){
    getQuote();
  });
  
});