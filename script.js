function addTask() {
    const inputBox = document.getElementById('input-box');
    const listContainer = document.getElementById('list-container');

    if (inputBox.value.trim() === "") {
        alert("Please enter the task");
        return;
    }
    const li = document.createElement('li');
    li.textContent = inputBox.value;

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '&times;';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function() {
        listContainer.removeChild(li);
    };

    li.appendChild(deleteBtn);
    listContainer.appendChild(li);

    inputBox.value = "";

    li.addEventListener('click', () => {
        li.classList.toggle('checked');
    });
}


