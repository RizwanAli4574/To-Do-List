let inputBox = document.getElementById('input-box');
let listC = document.getElementById('list-container');

function addTask(){
    if(inputBox.value === ''){
        alert('You must write somthing!')
    } 
    else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listC.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputBox.value = '';
    saveData()
}

listC.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData(){
    localStorage.setItem('data' , listC.innerHTML);
}
function showList(){
    listC.innerHTML = localStorage.getItem('data');
}
showList()