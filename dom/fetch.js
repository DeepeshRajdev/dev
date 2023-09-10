/*fetch API
1) When you call fetch(),
it creates a promise that is pending until the request is completed (either successfully or with an error).

2)When the server responds to the request, the promise resolves, and you receive a Response object.
The Response object contains information about the response, including the status code,
 headers, and the actual data (which can be retrieved using methods like .json(), .text(), etc.).
*/

let url = "https://api.github.com/users/DeepeshRajdev";
fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (collection) {
        console.log(collection);
    })
    .catch(function (error) {
        console.log(error);
    })

/*some crucial info:
A fetch() promise only rejects when a network error is encountered
(which is usually when there's a permissions issue or similar).
A fetch() promise does not reject on HTTP errors (404, etc.).
Instead, a then() handler must check the Response.ok and/or Response.status properties.
*/
fetch("https://api.github.com/users/hannMeriJaan")
    .then(response => console.log(response.status))
    .catch(error => console.log(error)); //This block will not be executed for HTTP errors
