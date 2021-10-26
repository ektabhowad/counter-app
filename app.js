//set the initial value
let count = 0;

//getting all the values 
let value = document.querySelector('#value');
// calling all btns by class
let btns = document.querySelectorAll('.btn');
//using for each function

btns.forEach(function (btn) {
    btn.addEventListener('click', function(e){
    let style = e.currentTarget.classList; 
    if (style.contains("decrease")){
        count--;
    } else if (style.contains("increase")){
        count++;
    } else {
        count = 0;
    }
    if (count > 0) {
        value.style.color = "green";
    }
    if (count < 0) {
        value.style.color = "red";
    } 
    if (count === 0) {
        value.style.color = "black";
    }
    value.textContent = count;
    });
});