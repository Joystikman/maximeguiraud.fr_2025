/*HTML INPUT*/
function createNode(element) {
    return document.createElement(element); // Create the type of element you pass in the parameters
  }
  function append(parent, el) {
    return parent.appendChild(el); // Append the second parameter(element) to the first one
  }

/*Retrieve data*/
var entree = document.getElementById('entree');

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const classes = ["quart","demi","trois","total"];

const check = {}
check["1"] = 0;
check["2"] = 0;
check["3"] = 0;
check["4"] = 0;
check["5"] = 0;
check["6"] = 0;
check["7"] = 0;
check["8"] = 0;
check["9"] = 0;

for (let i = 0; i < 18; i++) {
    //console.log("ligne "+i);
    let div = createNode("div");
  for (let j = 0; j < 18; j++){
    //console.log("colonne "+i);
    let img = createNode("img");
    let random_tile = randomIntFromInterval(1, 9);
    //console.log("tile "+random_tile);
    check[random_tile]++;
    let src = "carrelage/0"+random_tile+".png";
    img.classList = classes[randomIntFromInterval(0, 3)]
    img.src=src;
    div.append(img);
  }
  entree.append(div);
}
console.log(check);
