// loading all experience from json data set

fetch("content/experience.json").then((res)=>{
    if (res.ok) {
        return res.json();
    } else {
        return {
            "msg": "데이터를 불러오는데 실패하였습니다."
        };
    }
}).then((data) => {
    const container = document.querySelector('experience_content');
    if (data.msg) {
        container.appendChild(document.createTextNode(data.msg));
    } else {
        for(let i = 0; i < data.years.length; i++) {
            append_new_year_node(data.years[i].year);
            const exp = data.years[i].experiences;
            for(let j = 0; j < exp.length; j++) {
                console.log(exp[j]);
                append_new_experience_node(exp[j]);
            }
        }
    }
    console.log(data);
});

const append_new_year_node = function(year) {
    const history = document.querySelector('#history_class');
    const new_year = document.createElement("li");
    const new_year_content = document.createElement("h3");
    new_year_content.append(document.createTextNode(year));
    new_year.setAttribute("class", "year");
    new_year.appendChild(new_year_content);
    history.appendChild(new_year);
}

const append_new_experience_node = function(experience) {
    const history = document.querySelector('#history_class');
    const new_experience = document.createElement("li");
    
    const new_experience_date = document.createElement("h4");
    new_experience_date.appendChild(document.createTextNode(experience.date));
    new_experience.appendChild(new_experience_date);

    const new_experience_title = document.createElement("h4");
    new_experience_title.appendChild(document.createTextNode(experience.title));
    new_experience.appendChild(new_experience_title);

    if (experience.content) {
        const new_experience_content = document.createElement("p");
        console.log(experience.content);
        new_experience_content.innerHTML = experience.content.join("");
        new_experience.appendChild(new_experience_content);
    }

    history.appendChild(new_experience);
}