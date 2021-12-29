canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

keys_width = 600;
keys_height = 200;

keys_x_pos = 100;
keys_y_pos = 100;

var image_keys;

window.addEventListener("keydown", my_keydown);

function add() {
    keys_image = new Image();
    keys_image.src = image_keys;
    keys_image.onload = uploadkeys();
}

function uploadkeys() {
    ctx.drawImage(keys_image, keys_x_pos, keys_y_pos, keys_width, keys_height);

}

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if((keyPressed >= 65 & keyPressed <= 90)|| (keyPressed >= 97 & keyPressed <= keyPressed <= 122)){
        alphabetkey();
        document.getElementById("d1").innerHTML = "You pressed an alphabet key";
    }
    else if(keyPressed >= 48 & keyPressed <= 57) {
        numberkey();
        document.getElementById("d1").innerHTML = "You pressed a number key";
    }
    else if((keyPressed >= 37 & keyPressed <= 40)|| (keyPressed == 17 & 18 & 27)) {
        otherkey();
        document.getElementById("d1").innerHTML = "You pressed an other key";
    }
}

function alphabetkey() {
    image_keys = "alphabetkey.png";
    add();
}

function numberkey() {
    image_keys = "numberkey.png";
    add();
}

function otherkey() {
    image_keys = "otherkey.png";
    add();
}