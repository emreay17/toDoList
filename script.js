let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputText =document.getElementById('inputText');
let clearToDoButton = document.getElementById('clearToDo');

addToDoButton.addEventListener('click', function(){

    let list = document.createElement('p');
    toDoContainer.classList.add('list-style');
    toDoContainer.appendChild(list);
    list.innerHTML = inputText.value;
    inputText.value = '';
    clearToDoButton.addEventListener('click', function(){
    list.style.display='none';
    })
   
})
