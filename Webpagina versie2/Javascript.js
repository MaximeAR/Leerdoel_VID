/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/
 

var body = document.getElementById("body");
var Logo = document.getElementById("Logo");

Logo.onclick = function() {
    
    if(body.className == "invert"){
        body.className = "";
    } else{
        body.className = "invert";
        
    }
}

var Facebook = document.querySelector('#Facebook');
console.log(Facebook);

window.addEventListener('keydown', move1);

function move1(event) {
    
    if (event.keyCode == 70) {
        Facebook.classList.toggle('F');        
    }
}   

var Youtube = document.querySelector('#Youtube');
console.log(Youtube);

window.addEventListener('keydown', move2);

function move2(event) {
    
    if (event.keyCode == 89) {
        Youtube.classList.toggle('Y');        
    }
} 

var Instagram = document.querySelector('#Instagram');
console.log(Instagram);

window.addEventListener('keydown', move3);

function move3(event) {
    
    if (event.keyCode == 73) {
        Instagram.classList.toggle('I');        
    }
} 

var Snapchat = document.querySelector('#Snapchat');
console.log(Snapchat);

window.addEventListener('keydown', move4);

function move4(event) {
    
    if (event.keyCode == 83) {
        Snapchat.classList.toggle('S');        
    }
} 

var Linkedin = document.querySelector('#Linkedin');
console.log(Linkedin);

window.addEventListener('keydown', move5);

function move5(event) {
    
    if (event.keyCode == 76) {
        Linkedin.classList.toggle('L');        
    }
} 

var Twitter = document.querySelector('#Twitter');
console.log(Twitter);

window.addEventListener('keydown', move6);

function move6(event) {
    
    if (event.keyCode == 84) {
        Twitter.classList.toggle('T');        
    }
} 
