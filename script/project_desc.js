var project_desc_area = document.getElementsByClassName('project_desc')[0];
var project_item_list = document.getElementsByClassName('item');
console.log(project_desc_area);
project_desc_area.innerHTML = "hello";
for (var i = 0; i < project_item_list.length; i++)
{
    var project_item = project_item_list[i];
    console.log(project_item.innerHTML);
    var project_item_tag = project_item.getAttribute('id');
    console.log(project_item_tag);
    project_item.addEventListener('click', function () {
        //alert("hi");
        project_desc_area.innerHTML = project_item_tag;
        project_desc_area.innerHTML += "test";
    });
}
//project_desc_area.innerText = project_item_list.length.toString();
