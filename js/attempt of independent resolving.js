document.getElementById('add').addEventListener('click', function() {
    var value = document.getElementById('item');

    if(value) {
        addItemToDo(value);
        document.getElementById('item').value = '';
    }
});

function addItemToDo() {
    var list = document.getElementById('todo');
    
    var item = document.createElement('li');
    item.innerText = text;
    
    var buttons = document.createElement('div');
    buttons.classList.add('buttons');
    
    var remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = removeIcon;
};