
function ghettoMain() {
	
	var request = new XMLHttpRequest();
	request.open("GET", "https://34.82.142.153/users/v1/users", false);
	request.send(null);
	var users = JSON.parse(request.responseText);
	console.log(users);
	
	var list = document.getElementById("listek");


	for( var i = 0; i < users.length; i++){
		var node = document.createElement("LI");                 				// Create a <li> node
		var textnode = document.createTextNode(users[i]["username"]);         	// Create a text node
		node.appendChild(textnode);                              				// Append the text to <li>
		list.appendChild(node);    											    // Append <li> to <ul> with id="myList"
	}

}
