number = 0;
const animations = ['pikachu.gif',
  'pikachu.gif',
  'pikachu.gif'
];


const refreshIntervalId = setInterval(function() {
  let image = document.getElementById('pikaimageid');
  image.src = animations[number];
},1)


function character() {
clearInterval(refreshIntervalId);
  let image = document.getElementById('pikaimageid');
  image.src = animations[number];

  console.log(number);
  number++;

}

function myFunction() {
    let x = document.getElementById("myNav");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  }

