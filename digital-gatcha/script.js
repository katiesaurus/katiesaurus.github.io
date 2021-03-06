//This is your javascript code. This is where the math happens!
//setWords() is the command you'll execute when someone pushes the button. Here's where we define it.
setWords()

//double check that your choices are formatted correctly, with a pair of STRAIGHT (not curly) quotation marks and a comma OUTSIDE the quotation marks.
function setWords() {
  const choice1 = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violent",
    "pink",
    "black",
    "teal",
  ];

  const choice2 = [
    "alien",
    "robot",
    "humanoid",
    "android",
    "cyborg",
    "blob",
    "creature",
    "monster",
    "houndstooth",
    "checkered",
    "ombre",
  ];

   const choice3 = [
     "horror",
     "terror",
     "beast",
     "monster",
     "creature",
     "behemoth",
     "demon",
     "mutant",
     "abomination",
      ];

  const randomNumber1 = Math.floor(Math.random() * choice1.length);
  const randomNumber2 = Math.floor(Math.random() * choice2.length);
   const randomNumber3 = Math.floor(Math.random() * choice3.length);

  document.getElementById("choice1").innerHTML = choice1[randomNumber1];
  document.getElementById("choice2").innerHTML = choice2[randomNumber2];
   document.getElementById("choice3").innerHTML = choice3[randomNumber3];

}
