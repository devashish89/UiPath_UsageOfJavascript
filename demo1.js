function(element, message){
	window.scrollTo(0,document.body.scrollHeight);
	var msg = window.prompt("enter greeting message");
	window.alert(message+" "+msg);
	return document.querySelector(".fbar.b2hzT").innerText;
}