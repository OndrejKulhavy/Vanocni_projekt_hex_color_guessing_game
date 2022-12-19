let color;
let dificulty = 6;

const Win = () => {
    document.getElementById("hex_color").innerHTML = "You Won!";
    document.getElementById("colors_container").innerHTML = "";  
};

function Easy() {
  dificulty = 3;
  console.log(dificulty);
  Play();
}

function Medium() {
  dificulty = 6;
  console.log(dificulty);
  Play();
}

function Hard() {
  dificulty = 9;
  console.log(dificulty);
  Play();
}

const IsItRightColor = (id) => {
  if (color === id) {
    alert("Correct!");
    Win();
  } else {
    alert("Wrong!");
  }
  let element = document.getElementById(id);
  element.parentNode.removeChild(element);
};

const CreateColorButton = () => {
  let div = document.createElement("div");
  div.style.backgroundColor = color;
  div.className = "color_button";
  div.id = color;
  div.addEventListener("click", (event) => {
    IsItRightColor(color, this.id);
  });
  return div;
};

const CreateRandomColorButton = () => {
  let randomColor = "#" + Math.floor(Math.random() * 16777215)
    .toString(16)
  console.log(randomColor);
  let div = document.createElement("div");
  div.style.backgroundColor = randomColor;
  div.className = "color_button";
  div.id = randomColor;
  div.addEventListener("click", (event) => {
    IsItRightColor(randomColor, this.id);
  });
  return div;
};

function Play() {
  hexColor = document.getElementById("hex_color");
  color = ("#" + Math.floor(Math.random() * 16777215)
    .toString(16))
    .toUpperCase();
  let color_container = document.querySelector("#colors_container");
  color_container.innerHTML = "";
  console.log(color_container);
  let random_number = Math.floor(Math.random() * dificulty);
  for (let i = 0; i < dificulty; i++) {
    if (i === random_number) {
      color_container.appendChild(CreateColorButton());
    } else {
      color_container.appendChild(CreateRandomColorButton());
    }
  }
  hexColor.innerHTML = color;
  console.log(randomColor);
}

Play();