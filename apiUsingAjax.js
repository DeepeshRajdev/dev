/* 
XMLHttpRequest (XHR) is a JavaScript class used to asynchronously transmit HTTP requests from a web browser to a web server.
 It allows a browser-based application to make a fine-grained server call and store the results in XMLHttpRequest's responseText attribute.
XHR objects are used to interact with servers and retrieve data from a URL without having to do a full page refresh.
The XMLHttpRequest Standard defines an API that provides scripted client functionality for transferring data between a client and a server.
 */
let url = "https://api.github.com/users/DeepeshRajdev";

let xhr = new XMLHttpRequest();//To make an HTTP request to the server with JavaScript,
// you need an instance of an object with the necessary functionality. This is where XMLHttpRequest comes in.

xhr.onreadystatechange = function () {
    console.log(this.readyState);
    if (this.readyState === 4) {
        let repo = this.responseText; //responseText :returns the server response as a string of text
        repo = JSON.parse(repo);//converting string into JSON


        console.log(repo.public_repos);
        console.log(repo.login)
        console.log(repo)
        //console.log(this.response);
    }
}
//Next, after declaring what happens when you receive the response, you need to actually make the request,
//by calling the open() and send() methods of the HTTP request object, like this:
xhr.open("GET", url);
xhr.send();

// Value State	Description
// 0	UNSENT	Client has been created. open() not called yet.
// 1	OPENED	open() has been called.
// 2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
// 3	LOADING	Downloading; responseText holds partial data.
// 4	DONE	The operation is complete.
