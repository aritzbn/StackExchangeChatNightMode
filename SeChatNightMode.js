//StackExchange chat night mode

//RGB Color picker
//https://www.w3schools.com/colors/colors_picker.asp

//Fondo general
var generalBackground = document.getElementById('container');
generalBackground.style.background='#000035';

//General messages said by others
setInterval(repaint, 1000);

function repaint(){
	
	//Background from messages
	var generalMessagesBg = document.getElementsByClassName('messages');
	for(i=0;i < generalMessagesBg.length; i++){
		generalMessagesBg[i].style.backgroundColor='#004d99'		
	}

	//Messages text color
	var texts = document.getElementsByClassName('content');
	for(i=0 ; i<texts.length ; i++){
		texts[i].style.color='#e6e6ff'
	}

	//username text color
	var usernames = document.getElementsByClassName('username');
	for(i=0 ; usernames.length ; i++){
		usernames[i].style.color='#e6e6ff';
	}
	
	var usernames = document.getElementsByClassName('username');
	for(i=0 ; usernames.length ; i++){
		usernames[i].style.color='#e6e6ff';
	}
}