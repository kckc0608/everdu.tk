let onClickProjectButton = function(project_id) {
    project_desc_area.innerHTML = '';
    fetch("content/" + project_id + "_desc.html")
        .then(function(response) {
            if (response.ok) {
                return response.text();
            }
            return "no response";
        })
        .then(function(data) {
            project_desc_area.innerHTML += data.toString();
        });
}

let project_desc_area = document.getElementsByClassName('project_desc')[0];
let project_item_list = document.getElementsByClassName('item');

for (let i = 0; i < project_item_list.length; i++)
{
    let project_item = project_item_list[i];
    let project_item_tag = project_item.getAttribute('id');
    project_item.addEventListener('click', function () {
        onClickProjectButton(project_item_tag);
    });
}
