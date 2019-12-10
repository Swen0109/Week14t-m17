document.body.style.backgroundColor="grey";
document.getElementById('container').style.border="70px solid white";
document.getElementById("container").style.margin="0px 350px 0px 350px";
document.getElementById('container').style.backgroundColor="white";

var button = document.createElement('button');
button.id = "button1";
document.getElementById('container').appendChild(button);
document.getElementById('button1').innerText="Button 1";
document.getElementById('button1').style.border="20px solid green";
document.getElementById('button1').style.padding="0px 40px 0px 40px";
document.getElementById("button1").style.margin="0px 10px 0px 80px";
document.getElementById('button1').style.backgroundColor="green"; 
document.getElementById('button1').onclick=groen;

var tweedebutton = document.createElement('button');
tweedebutton.id  = "button2";
document.getElementById('container').appendChild(tweedebutton);
document.getElementById('button2').innerText="Button 2";
document.getElementById('button2').style.border="20px solid red";
document.getElementById('button2').style.padding="0px 40px 0px 40px";
document.getElementById('button2').style.margin="0px 10px 0px 0px";
document.getElementById('button2').style.backgroundColor="red";
document.getElementById('button2').onclick=rood;

var derdebutton = document.createElement('button');
derdebutton.id = "button3";
document.getElementById('container').appendChild(derdebutton);
document.getElementById("button3").innerText="Button 3";
document.getElementById('button3').style.border= "20px solid blue";
document.getElementById('button3').style.padding="0px 40px 0px 40px";
document.getElementById('button3').style.backgroundColor= "blue";
document.getElementById('button3').onclick=blauw;

function groen(){
	document.body.style.backgroundColor="green";
}

function rood(){
	document.body.style.backgroundColor="red";
}

function blauw(){
	document.body.style.backgroundColor="blue";
}