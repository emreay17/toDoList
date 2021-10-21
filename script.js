let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputText =document.getElementById('inputText');

addToDoButton.addEventListener('click', function(){

    let list = document.createElement('li');
    toDoContainer.appendChild(list);
    list.innerHTML = inputText.value;
    inputText.value = '';

})

