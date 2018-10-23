var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');


form.addEventListener('submit', addNewItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItem);

function addNewItem(e) {
    e.preventDefault();
    var newItem = document.getElementById('item').value;
    var li = document.createElement('li');
    var delBtn = document.createElement('button');
    li.className = "list-group-item";
    delBtn.className = "btn btn-danger btn-sm float-right delete";
    li.appendChild(document.createTextNode(newItem));
    delBtn.appendChild(document.createTextNode('X'));
    li.appendChild(delBtn);
    itemList.appendChild(li);
}

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItem(e){
    var text = e.target.value.toLowerCase();
//    console.log(text);
    var items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        //console.log(itemName);
        if(itemName.toLowerCase().indexOf(text)!=-1){
           item.style.display="block";
           }else{
               item.style.display="none";
           }
    });
}
