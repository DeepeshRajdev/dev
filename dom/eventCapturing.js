document.querySelector(".parent").addEventListener("click", (event) => {
    console.log("parent clicked");
}, true);
document.querySelector(".child").addEventListener("click", (event) => {
    console.log("child clicked");
}, true);
