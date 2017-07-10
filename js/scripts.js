var removeIcon = '<i class="fa fa-trash-o remove" aria-hidden="true"></i>';
var completeIcon = '<i class="fa fa-thumbs-o-up complete" aria-hidden="true"></i>'
    
    
document.getElementById('add').addEventListener('click', function() {
    var value = document.getElementById('item').value;
    if(value) {
        addItemToDo(value);
        document.getElementById('item').value = '';
    } else {
        alert("don't you have any tasks lazy bones today ?!");
    }
});

document.getElementById('item').addEventListener('keydown', function (e) {
  var value = this.value;
  if (e.code === 'Enter' && value) {
    addItemToDo(value);
    document.getElementById('item').value = '';
  }
});

function removeItem(e) {
    var item = this.parentNode.parentNode;
    var parent = this.parentNode.parentNode.parentNode;
    
    parent.removeChild(item);
};

function completeItem(item) {
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    var id = parent.id;
    
    var target = (id === 'todo') ? document.getElementById('completed'):document.getElementById('todo');
        
    parent.removeChild(item);
    target.insertBefore(item, target.childNodes[0]);

};

function addItemToDo(text) {
    var list = document.getElementById('todo');
    
    var item = document.createElement('li');
    item.innerText = text;
    
    var buttons = document.createElement('div');
    buttons.classList.add('buttons');
    
    var remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = removeIcon;
    
    remove.addEventListener('click', removeItem);
    
    var complete = document.createElement('button');
    complete.classList.add('complete');
    complete.innerHTML = completeIcon;
    
    complete.addEventListener('click', completeItem);
    
    buttons.appendChild(remove);
    buttons.appendChild(complete);
    item.appendChild(buttons);
     
    list.insertBefore(item, list.childNodes[0]);
}