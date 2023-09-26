let message = prompt("Escribe el texto a codificar");
let div=document.getElementById("center");
let picture = document.createElement("img");
let p=document.getElementById("encrypted");
let picturePath="";
const pictures=["pictures/pictureOne.jpg","pictures/pictureTwo.png","pictures/pictureThree.png"];

message.toUpperCase()
let encryptedMessage="";
for (let i = 0; i < message.length; i++) {
    let character = message[i].charCodeAt();
    if(character==90){
        character=65
    }else if (character==57) {
        character=48
    } else if (character==32) {
        character=32
    }else{
        character++;
    }
    encryptedMessage=encryptedMessage+String.fromCharCode(character);     
}

p.innerText="Tu mensaje codificado es "+encryptedMessage;
picturePath="pictures/pictureZero.png"
picture.setAttribute("heigt","250");
picture.setAttribute("width","250");
picture.setAttribute("src",picturePath);

div.appendChild(picture);

picture.addEventListener("click",changeImage);

function changeImage(){
   picturePath= pictures[getRandomInt(pictures.length)];
   picture.setAttribute("src",picturePath);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}




