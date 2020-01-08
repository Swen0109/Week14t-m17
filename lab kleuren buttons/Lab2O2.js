document.getElementById('container').style.border="1px solid grey";
document.getElementById('container').style.margin="0px 460px 0px 460px";
document.getElementById('container').style.padding="10px 10px";
document.getElementById('container').style.backgroundColor="grey";

for (var i = 1; i <=30; i++){
	var buttons = document.createElement('button');
	buttons.id=`knop ${i}`;
	buttons.setAttribute("onclick",`kleuren(${i})`)
	document.getElementById('container').appendChild(buttons);
	document.getElementById(`knop ${i}`).style.height="50px";
	document.getElementById(`knop ${i}`).style.width="105px";
	document.getElementById(`knop ${i}`).style.margin="5px 5px";
	document.getElementById(`knop ${i}`).innerText=(`${i}`)
	document.getElementById(`knop ${i}`).style.backgroundColor="green";
	document.getElementById(`knop ${i}`).style.border="green";
}

function kleuren(rood){
	document.getElementById(`knop ${rood}`).style.backgroundColor="red";
}