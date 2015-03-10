function parse() {
	//create instance of object
	request = new XMLHttpRequest();
	//create or "open" HTTP request
	request.open("GET", "data.json", true);//true if asynchronous
	//set up way to manage response -- to a function
	request.onreadystatechange = parseData;
	//execute the request
	request.send();
	console.log("it sent");
}
function parseData() {
	console.log("can you read this?");
	//check the state
	if (request.readyState == 4) {
		//get the 'messages' part of the document
		messagesPart = document.getElementById("messages");
		//parses the text
		parsed = JSON.parse(request.responseText);
		//loops through length of text
		for (i = 0; i < parsed.length; i++) {
			messagesPart.innerHTML += "<p>" + parsed[i]["content"] + " " + parsed[i]['username'] + "</p>";
		}
	}
	else {}
}