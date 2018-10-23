var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');


form.addEventListener('submit', addNewItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItem);

function addNewItem(e) {
    e.preventDefault();
    //getting the value of the new item from the input field
    var newItem = document.getElementById('item').value;
    //creating new li item
    var li = document.createElement('li');
    //creating new button element
    var delBtn = document.createElement('button');
    //giving class name to the li item
    li.className = "list-group-item";
    //giving class name to delete button
    delBtn.className = "btn btn-danger btn-sm float-right delete";
    //connecting li with text
    li.appendChild(document.createTextNode(newItem));
    //putting cross icon to the delete button
    delBtn.appendChild(document.createTextNode('X'));
    li.appendChild(delBtn);
    itemList.appendChild(li);
}

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        //confirm is for the popup
        if (confirm('Are you sure?')) {
            //parent element used to get the list item
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItem(e){
    var text = e.target.value.toLowerCase();
//    console.log(text);
    var items = itemList.getElementsByTagName('li');
    //loop through the array of items containing li
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        //console.log(itemName);
        // converting all text inputs into lower case
        if(itemName.toLowerCase().indexOf(text)!=-1){
           item.style.display="block";
           }else{
               item.style.display="none";
           }
    });
}
