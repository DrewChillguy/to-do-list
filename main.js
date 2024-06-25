const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const btn = document.getElementById('button');

btn.addEventListener('click', function () {

    if (inputBox.value === '') {
        alert("Please enter text");
    } else {
        let toDo = document.createElement('LI');
        toDo.innerHTML = inputBox.value;
        listContainer.appendChild(toDo);

        let deleteButton = document.createElement('SPAN');
        deleteButton.innerHTML = '\u00d7';
        toDo.appendChild(deleteButton);
    }

    inputBox.value = '';
    saveData();
})

listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData()
    } else if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    }
})

saveData = () => {
    localStorage.setItem('doList', listContainer.innerHTML);
}

listContainer.innerHTML = localStorage.getItem('doList');









