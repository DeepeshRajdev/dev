let cnt = 0;
document.addEventListener('DOMContentLoaded', function () {     // <-- has only two attributes 1)event and 2)function
    document.querySelector('button').onclick = function () {
        cnt++;
        document.querySelector('h1').innerHTML = cnt;
        let heading = document.querySelector('span');
        if (cnt % 2 == 0) heading.innerHTML = "even";
        else heading.innerHTML = "odd";
    };
});
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').onsubmit = function () {
        let name = document.querySelector('#username').value; //if the tag is an input tag we can get its value using .value
        alert(`hello ${name}`);
    }
});