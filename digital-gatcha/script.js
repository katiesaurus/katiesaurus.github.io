//This is your javascript code. This is where the math happens!
//setWords() is the command you'll execute when someone pushes the button. Here's where we define it.
setWords()

//double check that your choices are formatted correctly, with a pair of STRAIGHT (not curly) quotation marks and a comma OUTSIDE the quotation marks.
function setWords() {
  const choice1 = [
    "cat",
    "dog",
    "frog",
    "rabbit",
    "blue",
    "polka-dot",
    "pink",
    "glamourous",
    "lazy",
    "sleepy",
    "yellow",
    "sparkly",
    "unicorn",
    "vibrant",
    "electric",
    "neon",
    "soft",
    "glowing",
    "delicate",
    "galaxy",
    "pastel",
    "teal",
    "lilac",
    "striped",
    "quick",
    "rose",
    "bejeweled",
    "milky",
    "fantastic",
    "melty",
    "teddy",
    "whimsicle",
    "sugary",
    "dreamy",
    "petit",
    "mint",
    "azure",
    "periwinkle",
    "aqua",
    "radiant",
    "fushia",
    "petit",
    "fancy",
    "sweetie",
    "magical",
    "cosmic",
    "crystal",
    "lucky",
    "luminous",
    "sweet",
    "lovely",

  ];

  const choice2 = [
    "alien",
    "robot",
    "humanoid",
    "demon",
    "blob",
    "creature",
    "monster",
    "isopod",
    "plant",
    "dessert",
    "ufo",
    "ghost",
    "extraterrestrial",
    "martian",
    "apparition",
    "slime",
    "dragon",
    "???",
    "fruit",
    "mystery",
    "fey",
    "elemental",
    "monstrosity",
    "ooze",
    "undead",
    "beast",
    "celestial",
    "mutant",
    "machine",
    "cryptid",
    "construct",
    "sea creature",
    "deity",
    "cyclops",
    "goblin",
    "toy",
    "critter",




  ];

   const choice3 = [
     "wearing socks",
     "with bubbles",
     "with a bow",
     "magician",
     "explorer",
     "royalty",
     "trouble maker",
     "dreamer",
     "with a hat",
     "snacking",
     "artist",
     "idol",
     "fighter",
     "with wings",
     "aristocrat",
     "that floats",
     "with wings",
     "baker",
     "rogue",
     "musician",
     "with frills",
     "with horns",
     "pop star",

      ];

  const randomNumber1 = Math.floor(Math.random() * choice1.length);
  const randomNumber2 = Math.floor(Math.random() * choice2.length);
   const randomNumber3 = Math.floor(Math.random() * choice3.length);

  document.getElementById("choice1").innerHTML = choice1[randomNumber1];
  document.getElementById("choice2").innerHTML = choice2[randomNumber2];
   document.getElementById("choice3").innerHTML = choice3[randomNumber3];

}
