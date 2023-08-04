function a(){
    b();
    function b(){
        c();
        function c(){
            console.log(x); // tries to find x in its local memory and when fails then tries to find in lexical environment of parent
        }
    }
}
var x=5;
a();
// whenever an execution context is created ,its lexical envionment is also created equals to its local memory and parents lexical environment